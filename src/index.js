import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Routes'; // Certifique-se de que o nome e o caminho estão corretos

const root = ReactDOM.createRoot(document.getElementById('root')); // Criar a raiz do React
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
