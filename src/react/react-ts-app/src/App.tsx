import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Logo } from './components/logo';
import { TodoInput } from './components/TodoInput';

const App: React.FC = () => {
  const handleSubmit = (e: string) => console.log(e)
  return (
    <div className="App">
      <header className="App-header">
        <Logo logo={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <TodoInput handleSubmit={handleSubmit}></TodoInput>
    </div>
  );
}

export default App;
