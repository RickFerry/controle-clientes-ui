import React, { useState } from 'react';
import { registerUser } from '../../api/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ nome, email, senha });
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer registro', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
