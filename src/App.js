import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
//import "react-toastify/dist/ReactToastify.css";
import HomePage from "./layout/HomePage";
//import axios from "axios";
import ProductList from "./layout/ProductList";
import ProductList1 from "./layout/ProductList1";
import About from "./layout/About";

import Contact from "./layout/Contact";
import Pricing from "./layout/Pricing";
import Team from "./layout/Team";
import ProductPage from "./components/ProductPage";
import ContactForm from "./components/ContactForm";
import SignUpForm from "./components/SignUpForm";


function App() {
  //const notify = () => toast("toastified!");

  // axios("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
  //   .then((response) => console.log(response.data))
  //   .catch((error) => console.log(error));

  return (
      <div className="App font-montserrat .box-border">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/ProductList" exact>
            <ProductList />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Route path="/ProductPage" exact>
            <ProductPage />
          </Route>
          <Route path="/Pricing" exact>
            <Pricing />
          </Route>
          <Route path="/Team" exact>
            <Team />
          </Route>
          <Route path="/ContactForm" exact>
            <ContactForm />
          </Route>
          <Route path="/SignUpForm" exact>
            <SignUpForm />
          </Route>
        </Switch>
        {/* <ToastContainer /> */}
      </div>
  );
}

export default App;
