import axios from 'axios';

// Instância do Axios com a URL base
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Substitua pela URL do seu backend
    headers: {
      'Content-Type': 'application/json',
    },
  });

//Intercepdadores
api.interceptors.request.use(config => {
    // Adicionar o token de autenticação em cada requisição
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;