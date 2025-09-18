import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { OrdersContext } from "../../contexts/OrderContext/OrderContext.jsx";

function NewOrderForm() {
  const { addOrder } = useContext(OrdersContext);

  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("pending");
  const [items, setItems] = useState([
    { productId: 1, name: "", quantity: 1, price: 0 },
  ]);

  // Manejar cambio en los productos
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  // Agregar un producto nuevo al formulario
  const addItem = () => {
    setItems([
      ...items,
      { productId: items.length + 1, name: "", quantity: 1, price: 0 },
    ]);
  };

  // Enviar pedido
  const handleSubmit = (e) => {
    e.preventDefault();

    if (customer.length < 3) {
      alert("El nombre del cliente debe tener al menos 3 caracteres.");
      return;
    }

    if (items.some((item) => item.quantity <= 0)) {
      alert("La cantidad de cada producto debe ser mayor a 0.");
      return;
    }

    const newOrder = {
      customer,
      status,
      items,
    };

    addOrder(newOrder);
    setCustomer("");
    setStatus("pending");
    setItems([{ productId: 1, name: "", quantity: 1, price: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-pedido">
      <h2>➕ Nuevo Pedido</h2>

      <label>
        Cliente:
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </label>

      <label>
        Estado:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pendiente</option>
          <option value="shipped">Enviado</option>
          <option value="delivered">Entregado</option>
        </select>
      </label>

      <h3>Productos</h3>
      {items.map((item, index) => (
        <div key={item.productId} className="producto-form">
          <input
            type="text"
            placeholder="Nombre"
            value={item.name}
            onChange={(e) => handleItemChange(index, "name", e.target.value)}
            required
          />
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, "quantity", Number(e.target.value))
            }
            required
          />
          <input
            type="number"
            min="0"
            value={item.price}
            onChange={(e) =>
              handleItemChange(index, "price", Number(e.target.value))
            }
            required
          />
        </div>
      ))}
      <button type="button" onClick={addItem}>
        ➕ Agregar Producto
      </button>

      <button type="submit">Guardar Pedido</button>
    </form>
  );
}

NewOrderForm.propTypes = {
  addOrder: PropTypes.func,
};

export default NewOrderForm;
