import React from "react";
import OrderItem from "../OrderItem/OrderItem";
import { Order } from "../../contexts/OrderContext/OrderContext";
import "./orderList.css";

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
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
          status={pedido.status} // ✅ ahora solo "pending"|"shipped"|"delivered"
          date={pedido.date}
        />
      ))}
    </div>
  );
};

export default OrderList;
