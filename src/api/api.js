import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (userData) => api.post('/Usuarios', userData);
export const loginUser = (loginData) => api.post('/Usuarios/login', loginData);
export const getClientes = (userId) => api.get(`/Clientes?usuarioId=${userId}`);
export const addCliente = (clienteData) => api.post('/Clientes', clienteData);
export const getCobrancasByCliente = (clienteId) => api.get(`/Cobrancas/Cliente/${clienteId}`);
export const addCobranca = (cobrancaData) => api.post('/Cobrancas', cobrancaData);
