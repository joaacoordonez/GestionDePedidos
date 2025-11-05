import React, { useContext } from 'react';
import { OrdersContext } from '../contexts/OrderContext/OrderContext';
import OrderStats from '../components/OrderStats/OrderStats';
import OrderChart from '../components/OrderChart/OrderChart';

const StatsPage: React.FC = () => {
  const { orders } = useContext(OrdersContext);

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
      <h1>Estadísticas</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <OrderStats
          total={stats.total}
          pending={stats.pending}
          shipped={stats.shipped}
          delivered={stats.delivered}
        />
      </div>
      <OrderChart />
    </div>
  );
};

export default StatsPage;
