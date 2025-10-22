import React from "react";
import "./orderItem.css";
import { OrderItem as OrderProduct, OrderStatus } from "../../contexts/OrderContext/OrderContext";

interface OrderItemProps {
  id: number;
  customer: string;
  items: OrderProduct[];
  status?: OrderStatus;
  date?: Date;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  customer,
  items,
  status = "pending",
  date = new Date(),
}) => {
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
};

export default OrderItem;
