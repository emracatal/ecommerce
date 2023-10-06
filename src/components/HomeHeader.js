import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
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

      <div className="navbar-light flex justify-center">
        <div className="container flex flex-grow justify-between items-center min-h-[58px] max-w-[1440px] px-10">
          <div className="navbar-light-left text-darkblue font-bold flex gap-2">
            <h3>Bandage</h3>
          </div>
          <nav className="navbar-light-middle text-darkblue items-center gap-2 mobile:hidden">
            <ul className="flex gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ProductList">Shop</Link>
              </li>
              <i className="fa-solid fa-chevron-down fa-sm self-center"></i>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/Team">Team</Link>
              </li>
            </ul>
          </nav>
          <div className="navbar-light-right flex text-turku items-center gap-3 ">
            <i className="fa-regular fa-user"></i>
            <p className="">Login / Register</p>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>1</p>
            <i className="fa-regular fa-heart"></i>
            <p>1</p>
          </div>
        </div>
      </div>
    </>
  );
}
