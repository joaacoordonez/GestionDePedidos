const orders = [
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
];

export default orders;
