import React from "react";
import PropTypes from "prop-types";
import OrderItem from "../OrderItem/OrderItem.jsx";
import "./orderList.css";

function OrderList({ orders }) {
  if (orders.length === 0) {
    return <p>No hay pedidos con este estado.</p>;
  }

  return (
    <div className="lista-pedidos">
      <h3>Lista de Pedidos</h3>
      {orders.map((pedido) => (
        <OrderItem
          key={pedido.id}
          id={pedido.id}
          customer={pedido.customer}
          items={pedido.items}
          status={pedido.status}
          date={pedido.date}
        />
      ))}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
      status: PropTypes.oneOf(["pending", "shipped", "delivered"]).isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default OrderList;
