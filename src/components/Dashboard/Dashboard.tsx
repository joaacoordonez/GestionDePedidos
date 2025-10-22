import React, { useContext } from "react";
import { OrdersContext, Order } from "../../contexts/OrderContext/OrderContext";
import OrderFilter from "../OrderFilter/OrderFilter";
import OrderList from "../OrderList/OrderList";
import OrderStats from "../OrderStats/OrderStats";
import "./Dashboard.css";

interface Stats {
  total: number;
  pending: number;
  shipped: number;
  delivered: number;
}

interface DashboardProps {
  filteredOrders: Order[];
  stats: Stats;
}

const Dashboard: React.FC<DashboardProps> = ({ filteredOrders, stats }) => {
  const { filter } = useContext(OrdersContext);

  return (
    <div className="dashboard">
      <h2>Panel de Gestión de Pedidos</h2>

      <OrderFilter filter={filter} />
      <OrderStats
        total={stats.total}
        pending={stats.pending}
        shipped={stats.shipped}
        delivered={stats.delivered}
      />
      <OrderList orders={filteredOrders} />
    </div>
  );
};

export default Dashboard;
