import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./layout/HomePage";
import ProductList from "./layout/ProductList";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Pricing from "./layout/Pricing";
import Team from "./layout/Team";
import ProductPage from "./components/ProductPage";
import ContactForm from "./components/ContactForm";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { getUserByVerify, setUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "./store/actions/globalActions";
import Productcard2 from "./components/Productcard2";
import ScrollToTop from "./components/ScrollToTop";
import ShoppingCardDropdown from "./components/ShoppingCardDropdown";
import ShoppingCart from "./components/ShoppingCart";
import Protected from "./components/Protected";
import Address from "./components/Checkout";
import Checkout from "./components/Checkout";
import OrderConfirm from "./components/OrderConfirm";
import OrderHistory from "./components/OrderHistory";
import OrdersList from "./components/OrdersList";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const token = localStorage.getItem("token");
  const categories = useSelector((state) => state.global.categories);

  useEffect(() => {
    if (token) {
      dispatch(getUserByVerify());
    }
    categories.length == 0 && dispatch(fetchCategories());
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
        <Route exact path="/product/:categoryId/:productId/:productNameSlug">
          <ProductPage />
        </Route>
        <Route path="/pricing" exact>
          <Pricing />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/contactForm" exact>
          <ContactForm />
        </Route>
        <Route path="/signUp" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/cart" exact>
          <ShoppingCart />
        </Route>
        <Route path="/orderHistory" exact>
          <OrderHistory />
        </Route>
        <Route path="/orderConfirm" exact>
          <OrderConfirm />
        </Route>
        <Route path="/protected">
          <Protected PageComponent={Checkout} fromURL={"/protected"} />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/ordersList" exact>
          <OrdersList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
