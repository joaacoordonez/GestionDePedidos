import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { OrdersContext, OrderStatus } from "../../contexts/OrderContext/OrderContext";
import "./NewOrderForm.css";

type OrderItem = {
  productId: number;
  name: string;
  quantity: number;
  price: number;
}
type NewOrder = {
  customer: string;
  status: OrderStatus;
  items: OrderItem[];
}

const NewOrderForm: React.FC = () => {
  const { addOrder } = useContext(OrdersContext);

  const [customer, setCustomer] = useState<string>("");
  const [status, setStatus] = useState<OrderStatus>("pending");
  const [items, setItems] = useState<OrderItem[]>([
    { productId: 1, name: "", quantity: 1, price: 0 },
  ]);

  const handleItemChange = (index: number, field: keyof OrderItem, value: string | number) => {
    setItems((prev) => {
      const newItems = [...prev];
      newItems[index] = { ...newItems[index], [field]: value } as OrderItem;
      return newItems;
    });
  };

  const addItem = () => {
    setItems((prev) => [...prev, { productId: prev.length + 1, name: "", quantity: 1, price: 0 }]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (customer.trim().length < 3) {
      alert("El nombre del cliente debe tener al menos 3 caracteres.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(customer.trim())) {
      alert("El nombre del cliente solo puede contener letras y espacios.");
      return;
    }

    if (items.some((item) => item.quantity <= 0)) {
      alert("La cantidad de cada producto debe ser mayor a 0.");
      return;
    }

    addOrder({ customer, status, items });
    setCustomer("");
    setStatus("pending");
    setItems([{ productId: 1, name: "", quantity: 1, price: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-pedido">
      <h2>Nuevo Pedido</h2>

      <label>
        Cliente:
        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} required />
      </label>

      <label>
        Estado:
        <select value={status} onChange={(e) => setStatus(e.target.value as OrderStatus)}>
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
          <h2>Cantidad:</h2>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, "quantity", Number(e.target.value))}
            required
          />
          <h2>$</h2>
          <input
            type="number"
            min="0"
            value={item.price}
            onChange={(e) => handleItemChange(index, "price", Number(e.target.value))}
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
};

export default NewOrderForm;
