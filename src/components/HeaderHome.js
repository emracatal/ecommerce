import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MD5 from "crypto-js/md5";
import Dropdown from "./Dropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchProducts } from "../store/actions/productActions";
import Logout from "./Logout";

export default function HomeHeader({ onCategoryChange }) {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.global.categories);
  const [offset, setOffset] = useState(0);
  const limit = 24;

  const handleCategoryChange = (category) => {
    dispatch(
      fetchProducts({ category, filter: "", sort: "", limit, offset: 0 })
    );
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <>
      <div className="navbar-dark bg-darkblue text-white flex justify-center px-10 mobile:hidden">
        <div className="container flex flex-grow justify-between items-center min-h-[58px] max-w-[1440px]">
          <div className="navbar-dark-left flex gap-2 ">
            <div className="navbar-dark-phone flex gap-1">
              <i className="fa-solid fa-phone"></i>
              <h6>(225)555-0118</h6>
            </div>
            <div className="navbar-dark-email flex gap-1">
              <i className="fa-regular fa-envelope"></i>
              <h6>michelle.rivera@example.com</h6>
            </div>
          </div>
          <div className="navbar-dark-middle flex gap-2">
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <div className="navbar-dark-right flex gap-2">
            <h6>Follow Us :</h6>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className="navbar-light flex justify-center mobile:px-10">
        <div className="container flex flex-grow justify-between items-center min-h-[91px] max-w-[1440px] mx-auto px-10">
          <div className="navbar-light-left text-darkblue font-bold flex gap-2  ">
            <h3>Bandage</h3>
          </div>
          <nav className="navbar-light-middle text-darkblue items-center gap-2 mobile:hidden ">
            <ul className="flex gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <div className="flex gap-0">
                <li>
                  <Link to="/shopping">Shop</Link>
                </li>
                <Dropdown onChange={handleCategoryChange} />
              </div>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </nav>
          <div className="navbar-light-right flex text-turku items-center gap-3 mobile:hidden ">
            {!Object.keys(user).length ? (
              <div className="flex gap-1 items-center text-base">
                <i className="far fa-user"></i>
                <Link to="/Login">Login /</Link>
                <Link to="/SignUp">Register</Link>
              </div>
            ) : (
              <div className="flex gap-1 items-center text-base">
                <img
                  src={`https://www.gravatar.com/avatar/${MD5(
                    user.email
                  )}?s=24`}
                  className="border-2 border-solid rounded-[50%]"
                />
                <p className="text-sm">{user.name}</p>
                <Logout></Logout>
              </div>
            )}
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>1</p>
            <i className="fa-regular fa-heart"></i>
            <p>1</p>
          </div>
          <div className="navbar-light-right-mobile hidden mobile:flex mobile:text-darkblue mobile:items-center mobile:gap-3 mobile:px-10 ">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      <nav className="navbar-mobile hidden mobile:flex mobile:text-darkblue mobile:text-2xl mobile:items-center mobile:justify-center mobile:py-16">
        <ul className="flex flex-col items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
