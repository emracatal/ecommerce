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
import { getUserByVerify, setUser } from "./store/actions/userActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axiosWithAuth from "./api/axiosWithAuth";
import { fetchCategories } from "./store/actions/globalActions";
import { fetchProducts } from "./store/actions/productActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const token = localStorage.getItem("token");
  const categories = useSelector((state) => state.global.categories);

  const products = useSelector((store) => store.product.productList.products);

  useEffect(() => {
    if (token) {
      dispatch(getUserByVerify());
    }
  }, []);
  useEffect(() => {
    categories.length == 0 && dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App font-montserrat .box-border">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shopping">
          <ProductList />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/ProductPage" exact>
          <ProductPage />
        </Route>
        <Route path="/pricing" exact>
          <Pricing />
        </Route>
        <Route path="/team" exact>
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
