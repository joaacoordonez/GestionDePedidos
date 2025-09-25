import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OrdersContext } from "../../contexts/OrderContext/OrderContext.jsx"; 
import OrderFilter from "../OrderFilter/OrderFilter.jsx";
import OrderList from "../OrderList/OrderList.jsx";
import OrderStats from "../OrderStats/OrderStats.jsx";
import "./Dashboard.css";


function Dashboard({ filteredOrders, stats }) {
  const { filter } = useContext(OrdersContext);

  return (
    <div className="dashboard">
      <h2>📊 Panel de Gestión de Pedidos</h2>

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
}

Dashboard.propTypes = {
  filteredOrders: PropTypes.array.isRequired,
  stats: PropTypes.shape({
    total: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    shipped: PropTypes.number.isRequired,
    delivered: PropTypes.number.isRequired,
  }).isRequired,
};

export default Dashboard;