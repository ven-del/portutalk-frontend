import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Login from './components/Login';
import Aulas from './components/Aulas';
import Downloads from './components/Downloads';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/aulas" component={Aulas} />
        <Route path="/downloads" component={Downloads} />
        <Route component={NotFound} /> {/* Página para rotas não encontradas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
