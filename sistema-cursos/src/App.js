import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import ComponentState from './components/component-state';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/state' component={ComponentState}></Route>
          <Route path='*' component={Component1} />
        </Switch>
        <div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
