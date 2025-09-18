import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OrdersContext } from "../../contexts/OrderContext/OrderContext.jsx";

function OrderFilter({ filter }) {
  const { setFilter } = useContext(OrdersContext);

  return (
    <div className="filtros">
      <h3>Filtrar por estado</h3>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todos</option>
        <option value="pending">Pendiente</option>
        <option value="shipped">Enviado</option>
        <option value="delivered">Entregado</option>
      </select>
    </div>
  );
}

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(["all", "pending", "shipped", "delivered"]).isRequired,
};

export default OrderFilter;
