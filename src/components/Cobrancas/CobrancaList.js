import React, { useState, useEffect } from 'react';
import { getCobrancasByCliente } from '../../api/api';

function CobrancaList({ clienteId }) {
  const [cobrancas, setCobrancas] = useState([]);

  useEffect(() => {
    const fetchCobrancas = async () => {
      try {
        const response = await getCobrancasByCliente(clienteId);
        setCobrancas(response.data);
      } catch (error) {
        console.error('Erro ao buscar cobranças', error);
      }
    };

    fetchCobrancas();
  }, [clienteId]);

  return (
    <div>
      <h3>Cobranças</h3>
      <ul>
        {cobrancas.map(cobranca => (
          <li key={cobranca.id}>
            {cobranca.descricao} - {cobranca.valor} - {cobranca.pago ? 'Pago' : 'Pendente'}
            {new Date(cobranca.dataVencimento) < new Date() && !cobranca.pago && (
              <span style={{ color: 'red' }}> (Em atraso)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CobrancaList;
