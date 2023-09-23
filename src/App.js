import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './layout/HomePage';



function App() {
  const notify = () => toast("toastified!");
  return (
    <div className="App">
      <ToastContainer />
      <HomePage />
    </div>
  );
}

export default App;

{/* 
import logo from './logo.svg';
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
      
      
      <button className="text-new" onClick={notify}>toastified?</button>
    
    */}
