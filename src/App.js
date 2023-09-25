import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./layout/HomePage";
import axios from "axios";

function App() {
  const notify = () => toast("toastified!");

  axios("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));

  return (
    <div className="App font-montserrat box-border">
      <ToastContainer />
      <HomePage />
    </div>
  );
}

export default App;
