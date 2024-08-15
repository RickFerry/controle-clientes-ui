import React, { useState, useEffect } from 'react';
import { getClientes } from '../../api/api';

function ClienteList({ userId, onClienteSelect }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await getClientes(userId);
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes', error);
      }
    };

    fetchClientes();
  }, [userId]);

  return (
    <div>
      <h3>Clientes</h3>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id} onClick={() => onClienteSelect(cliente.id)}>
            {cliente.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClienteList;
