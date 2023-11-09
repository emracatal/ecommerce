import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./layout/HomePage";
import axios from "axios";
import ProductList from "./layout/ProductList";
import ProductList1 from "./layout/ProductList1";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Pricing from "./layout/Pricing";
import Team from "./layout/Team";
import ProductPage from "./components/ProductPage";
import ContactForm from "./components/ContactForm";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import axiosInstance from "./api/api";
import { setUser } from "./store/actions/userActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axiosWithAuth from "./api/axiosWithAuth";
import { fetchCategories } from "./store/actions/globalActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const token = localStorage.getItem("token");
  const categories = useSelector((state) => state.global.categories);

  useEffect(() => {
    categories.length == 0 && dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (token) {
      axiosWithAuth()
        .get("/verify")
        .then(function (response) {
          dispatch(setUser(response.data));
        })
        .catch(function (error) {
          console.log(error);
          localStorage.setItem("token", "");
        });
    }
  }, []);

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
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
