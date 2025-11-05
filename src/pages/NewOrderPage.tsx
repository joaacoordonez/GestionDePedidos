import React from 'react';
import NewOrderForm from '../components/NewOrderForm/NewOrderForm';

const NewOrderPage: React.FC = () => {
  return (
    <div>
      <h1>Nuevo Pedido</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NewOrderForm />
      </div>
    </div>
  );
};

export default NewOrderPage;
