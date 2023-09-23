import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = () => toast("toastified!");
  return (
    <div className="App">
      <header className="App-header">
      <button className="text-new" onClick={notify}>toastified?</button>
        <ToastContainer />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
