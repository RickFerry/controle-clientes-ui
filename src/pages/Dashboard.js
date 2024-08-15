import React, { useState } from 'react';
import ClienteForm from '../components/Clientes/ClienteForm';
import ClienteList from '../components/Clientes/ClienteList';
import CobrancaList from '../components/Cobrancas/CobrancaList';
import CobrancaForm from '../components/Cobrancas/CobrancaForm';

function Dashboard() {
  const [selectedClienteId, setSelectedClienteId] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleClienteSelect = (clienteId) => {
    setSelectedClienteId(clienteId);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <ClienteForm userId={user.id} onClienteAdded={() => setSelectedClienteId(null)} />
      <ClienteList userId={user.id} onClienteSelect={handleClienteSelect} />
      {selectedClienteId && (
        <>
          <CobrancaForm clienteId={selectedClienteId} onCobrancaAdded={() => setSelectedClienteId(null)} />
          <CobrancaList clienteId={selectedClienteId} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
