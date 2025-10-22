import React, { useState, useMemo, useCallback } from "react";
import { OrdersContext, Order, FilterType, OrderStatus } from "./contexts/OrderContext/OrderContext";
import Dashboard from "./components/Dashboard/Dashboard";
import NewOrderForm from "./components/NewOrderForm/NewOrderForm";
import { orders as ordersData } from "./data/orders";

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);
  const [filter, setFilter] = useState<FilterType>("all");

  const addOrder = useCallback(
    (newOrder: Omit<Order, "id" | "date">) => {
      setOrders((prev) => [
        ...prev,
        { ...newOrder, id: prev.length + 1, date: new Date() },
      ]);
    },
    []
  );

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
    <OrdersContext.Provider
      value={{ orders, setOrders, filter, setFilter, addOrder }}
    >
      <div className="app">
        <h1>MailAméricas - Sistema de Gestión de Pedidos</h1>

        <Dashboard filteredOrders={filteredOrders} stats={stats} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <NewOrderForm />
        </div>
      </div>
    </OrdersContext.Provider>
  );
};

export default App;
