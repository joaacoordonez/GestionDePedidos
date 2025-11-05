import React, { useContext } from 'react';
import { OrdersContext, Order } from '../contexts/OrderContext/OrderContext';
import OrderFilter from '../components/OrderFilter/OrderFilter';
import OrderList from '../components/OrderList/OrderList';
import OrderStats from '../components/OrderStats/OrderStats';

const OrdersPage: React.FC = () => {
  const { orders, filter } = useContext(OrdersContext);

  const filteredOrders = filter === "all" ? orders : orders.filter((pedido) => pedido.status === filter);

  const pending = orders.filter((o) => o.status === "pending").length;
  const shipped = orders.filter((o) => o.status === "shipped").length;
  const delivered = orders.filter((o) => o.status === "delivered").length;
  const stats = {
    total: orders.length,
    pending,
    shipped,
    delivered,
  };

  return (
    <div>
      <h1>Pedidos</h1>
      <div className="dashboard">
        <OrderFilter filter={filter} />
        <OrderStats
          total={stats.total}
          pending={stats.pending}
          shipped={stats.shipped}
          delivered={stats.delivered}
        />
        <OrderList orders={filteredOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
