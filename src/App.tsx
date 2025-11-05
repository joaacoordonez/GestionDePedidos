import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OrdersContext, Order, FilterType, OrderStatus } from "./contexts/OrderContext/OrderContext";
import Navigation from "./components/Navigation/Navigation";
import OrdersPage from "./pages/OrdersPage";
import NewOrderPage from "./pages/NewOrderPage";
import StatsPage from "./pages/StatsPage";
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

  return (
    <OrdersContext.Provider
      value={{ orders, setOrders, filter, setFilter, addOrder }}
    >
      <Router basename="/GestionDePedidos">
        <div className="app">
          <h1>MailAméricas - Sistema de Gestión de Pedidos</h1>
          <Navigation />
          <Routes>
            <Route path="/" element={<OrdersPage />} />
            <Route path="/nuevo-pedido" element={<NewOrderPage />} />
            <Route path="/estadisticas" element={<StatsPage />} />
          </Routes>
        </div>
      </Router>
    </OrdersContext.Provider>
  );
};

export default App;
