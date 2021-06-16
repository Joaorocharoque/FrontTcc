import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCliente from './pages/CadastroCliente';
import Fila from './pages/Fila';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/CadastroCliente' component={CadastroCliente} />
          <Route path='/Fila' component={Fila} />
        </Switch>
      </Router>
    </>
  );
}

export default App;