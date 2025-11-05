import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Pedidos</Link></li>
        <li><Link to="/nuevo-pedido">Nuevo Pedido</Link></li>
        <li><Link to="/estadisticas">Estadísticas</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
