import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Controle de Clientes</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Registrar</Link>
    </div>
  );
}

export default Home;
