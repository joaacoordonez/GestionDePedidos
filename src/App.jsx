import React, { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { OrdersContext } from "./contexts/OrderContext/OrderContext.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import NewOrderForm from "./components/NewOrderForm/NewOrderForm.jsx";
import ordersData from "./data/orders.js";

const App = () => {
  const [orders, setOrders] = useState(ordersData);

  const [filter, setFilter] = useState("all");

  const addOrder = useCallback((newOrder) => {
    setOrders((prev) => [
      ...prev,
      { ...newOrder, id: prev.length + 1, date: new Date() },
    ]);
  }, []);

  const filteredOrders = useMemo(() => {
    if (filter === "all") return orders;
    return orders.filter((pedido) => pedido.status === filter);
  }, [orders, filter]);

  const stats = useMemo(() => {
    const pending = orders.filter((o) => o.status === "pending").length;
    const shipped = orders.filter((o) => o.status === "shipped").length;
    const delivered = orders.filter((o) => o.status === "delivered").length;
    return {
      total: orders.length,
      pending,
      shipped,
      delivered,
    };
  }, [orders]);

  return (
    <OrdersContext.Provider value={{ orders, addOrder, filter, setFilter }}>
      <div className="app">
        <h1>MailAméricas - Sistema de Gestión de Pedidos</h1>
        <Dashboard
          orders={orders}
          filteredOrders={filteredOrders}
          stats={stats}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <NewOrderForm />
        </div>
      </div>
    </OrdersContext.Provider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
