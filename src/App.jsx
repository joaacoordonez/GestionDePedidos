import React, { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { OrdersContext } from "./contexts/OrderContext/OrderContext.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import NewOrderForm from "./components/NewOrderForm/NewOrderForm.jsx";

const App = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Juan Pérez",
      date: new Date(),
      status: "pending",
      items: [
        { productId: 101, name: "Mouse", quantity: 2, price: 1500 },
        { productId: 102, name: "Teclado", quantity: 1, price: 3000 },
      ],
    },
    {
      id: 2,
      customer: "María López",
      date: new Date(),
      status: "shipped",
      items: [{ productId: 201, name: "Notebook", quantity: 1, price: 250000 }],
    },
  ]);

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
        <h1>📦 MailAméricas - Sistema de Gestión de Pedidos</h1>
        <Dashboard
          orders={orders}
          filteredOrders={filteredOrders}
          stats={stats}
        />
        <NewOrderForm />
      </div>
    </OrdersContext.Provider>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
