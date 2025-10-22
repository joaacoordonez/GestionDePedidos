import React, { createContext, useState, ReactNode } from "react";

// Tipos de status y filtros
export type OrderStatus = "pending" | "shipped" | "delivered";
export type FilterType = OrderStatus | "all";

// Tipos de productos y pedidos
export type OrderItem = {
  productId: number;
  name: string;
  quantity: number;
  price: number;
}

export type Order = {
  id: number;
  customer: string;
  items: OrderItem[];
  status: OrderStatus; // solo status reales
  date: Date;
}

// Tipo del contexto
export type OrdersContextType = {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  addOrder: (order: Omit<Order, "id" | "date">) => void;
}

// Valor inicial
export const OrdersContext = createContext<OrdersContextType>({
  orders: [],
  setOrders: () => {},
  filter: "all",
  setFilter: () => {},
  addOrder: () => {},
});

// Provider
type OrdersProviderProps = {
  children: ReactNode;
}

export const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addOrder = (order: Omit<Order, "id" | "date">) => {
    const newOrder: Order = {
      ...order,
      id: orders.length + 1,
      date: new Date(),
    };
    setOrders([...orders, newOrder]);
  };

  return (
    <OrdersContext.Provider value={{ orders, setOrders, filter, setFilter, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
