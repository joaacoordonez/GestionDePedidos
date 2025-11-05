import { Order } from "../contexts/OrderContext/OrderContext";

export const orders: Order[] = [
  {
    id: 1,
    customer: "Juan Pérez",
    status: "pending",
    date: new Date("2025-10-22"),
    items: [
      { productId: 1, name: "Producto A", quantity: 2, price: 100 },
      { productId: 2, name: "Producto B", quantity: 1, price: 50 },
    ],
  },
  {
    id: 2,
    customer: "María López",
    status: "shipped",
    date: new Date("2025-10-20"),
    items: [
      { productId: 3, name: "Producto C", quantity: 3, price: 75 },
    ],
  },
  {
    id: 3,
    customer: "Carlos García",
    status: "delivered",
    date: new Date("2025-10-18"),
    items: [
      { productId: 4, name: "Producto D", quantity: 1, price: 120 },
      { productId: 5, name: "Producto E", quantity: 2, price: 60 },
    ],
  },
];
