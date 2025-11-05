import React, { useEffect, useRef, useContext } from 'react';
import Highcharts from 'highcharts';
import 'highcharts/highcharts-3d';
import { OrdersContext } from '../../contexts/OrderContext/OrderContext';
import './OrderChart.css';

const OrderChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { orders } = useContext(OrdersContext);

  useEffect(() => {
    if (chartRef.current) {
      const pending = orders.filter((o) => o.status === "pending").length;
      const shipped = orders.filter((o) => o.status === "shipped").length;
      const delivered = orders.filter((o) => o.status === "delivered").length;

      Highcharts.chart(chartRef.current, {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: 'Estado de los Pedidos'
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        series: [{
          type: 'pie',
          name: 'Pedidos',
          data: [
            ['Pendientes', pending],
            ['Enviados', shipped],
            ['Entregados', delivered]
          ]
        }]
      });
    }
  }, [orders]);

  return (
    <div className="order-chart">
      <div ref={chartRef} id="container"></div>
    </div>
  );
};

export default OrderChart;
