import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
      setCounter(counter + 1);
  };

  const decrementCount = () => {
      setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  */}
        <h2>Counter: {counter}</h2>
        <div id = "buttonContainer">
          <button className="button" onClick = {incrementCount}>+</button>
          <button className="button" onClick = {decrementCount}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
