import React from "react";
import "./orderStats.css";

interface OrderStatsProps {
  total: number;
  pending: number;
  shipped: number;
  delivered: number;
}

const OrderStats: React.FC<OrderStatsProps> = ({ total, pending, shipped, delivered }) => {
  return (
    <div className="estadisticas">
      <h3>Estadísticas</h3>
      <p>
        | Total: <strong>{total}</strong> - Pendientes: <strong>{pending}</strong> - Enviados:{" "}
        <strong>{shipped}</strong> - Entregados: <strong>{delivered}</strong> |
      </p>
    </div>
  );
};

export default OrderStats;
