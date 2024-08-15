import React, { useState } from 'react';
import { addCobranca } from '../../api/api';

function CobrancaForm({ clienteId, onCobrancaAdded }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cobranca = { descricao, valor, dataVencimento, pago: false, clienteId };
      await addCobranca(cobranca);
      onCobrancaAdded();
    } catch (error) {
      console.error('Erro ao adicionar cobrança', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required />
      <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor" required />
      <input type="date" value={dataVencimento} onChange={(e) => setDataVencimento(e.target.value)} required />
      <button type="submit">Adicionar Cobrança</button>
    </form>
  );
}

export default CobrancaForm;
