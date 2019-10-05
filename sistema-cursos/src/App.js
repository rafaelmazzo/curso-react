import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import ComponentState from './components/component-state';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Component1 batata={"Texto vindo do componente pai"}></Component1>
          <ComponentState></ComponentState>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
