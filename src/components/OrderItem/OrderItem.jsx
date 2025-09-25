import PropTypes from "prop-types";
import "./orderItem.css"

function OrderItem({ id, customer, items, status, date }) {
  return (
    <div className="pedido">
      <h3>Pedido #{id}</h3>
      <p>Cliente: {customer}</p>
      <p>Fecha: {date.toLocaleDateString()}</p>
      <p>Estado: {status}</p>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            {item.name} (x{item.quantity}) - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: (props, propName, componentName) => {
        if (props[propName] <= 0) {
          return new Error(
            `La propiedad \`${propName}\` en \`${componentName}\` debe ser mayor que 0.`
          );
        }
      },
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  status: PropTypes.oneOf(["pending", "shipped", "delivered"]),
  date: PropTypes.instanceOf(Date),
};

OrderItem.defaultProps = {
  status: "pending",
  date: new Date(),
};

export default OrderItem;
