import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/popper.js/dist/umd/popper.min'
import Rotas from '../src/rotas'
import Menu from './components/menu';


function App() {
  return (
    <div>
      <Menu />   
      <Rotas />
    </div>
  );
}

export default App;