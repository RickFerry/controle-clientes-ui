import React, { useState } from 'react';
import { addCliente } from '../../api/api';

function ClienteForm({ userId, onClienteAdded }) {
  const [nome, setNome] = useState('');
  const [documento, setDocumento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cliente = { nome, documento, telefone, endereco, usuarioId: userId };
      await addCliente(cliente);
      onClienteAdded();
    } catch (error) {
      console.error('Erro ao adicionar cliente', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
      <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder="Documento" required />
      <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" required />
      <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" required />
      <button type="submit">Adicionar Cliente</button>
    </form>
  );
}

export default ClienteForm;
