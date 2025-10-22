import React, { useContext, ChangeEvent } from "react";
import { OrdersContext, FilterType } from "../../contexts/OrderContext/OrderContext";
import "./orderFilter.css";

interface OrderFilterProps {
  filter: FilterType;
}

const OrderFilter: React.FC<OrderFilterProps> = ({ filter }) => {
  const { setFilter } = useContext(OrdersContext);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as FilterType);
  };

  return (
    <div className="filtros">
      <h3>Filtrar por estado</h3>
      <select value={filter} onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="pending">Pendiente</option>
        <option value="shipped">Enviado</option>
        <option value="delivered">Entregado</option>
      </select>
    </div>
  );
};

export default OrderFilter;
