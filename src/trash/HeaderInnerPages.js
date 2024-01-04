import React from "react";
import { Link } from "react-router-dom";

export default function HeaderInnerPages() {
  return (
    <>
      <div className="navbar-light flex justify-center mobile:px-10">
        <div className="container flex flex-grow justify-between items-center min-h-[91px] max-w-[1050px] mx-auto">
          <div className="navbar-light-left text-darkblue font-bold flex gap-2  ">
            <h3>Bandage</h3>
          </div>
          <nav className="navbar-light-middle text-darkblue items-center gap-2 mobile:hidden ">
            <ul className="flex gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ProductList">Shop</Link>
              </li>
              <i className="fa-solid fa-chevron-down fa-sm self-center"></i>
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
          <div className="navbar-light-right flex text-turku items-center gap-3  ">
            <h6 className="mobile:hidden ">Login</h6>
            <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center mobile:hidden">
              <h6>Become a member</h6>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="navbar-light-right-mobile hidden mobile:flex mobile:text-darkblue mobile:items-center mobile:gap-3 mobile:px-10 ">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <nav className="navbar-mobile hidden mobile:flex mobile:text-darkblue mobile:text-3xl mobile:items-center mobile:justify-center mobile:py-16">
        <ul className="flex flex-col items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ProductList">Shop</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
