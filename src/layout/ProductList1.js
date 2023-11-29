import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-dark bg-secondarycolor1 text-white flex justify-center ">
        <div className="container flex flex-grow justify-between items-center min-h-[58px] max-w-[1440px]">
          <div className="navbar-dark-left flex gap-2">
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
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer px-4 py-2"
        >
          {" "}
          {/* hamburger menu icin */}
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`${menuOpen ? "" : "hidden"} md:block`}>
          {" "}
          {/* hamburger menu icin */}
          <div className="container max-w-[1440px] w-[100%]">
            <div className="navbar-light-inner flex flex-col md:flex-row justify-between items-center">
              <div className="navbar-light-bandageText mb-4 md:mb-0">
                <h3>Bandage</h3>
              </div>
              <div className="nav mb-4 md:mb-0">
                <ul className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-4">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shopping">Shop</Link>
                  </li>
                  <i className="fa-solid fa-chevron-down fa-sm"></i>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-light-right text-turku flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-4">
                <div className="flex items-center">
                  <i className="fa-regular fa-user mr-2"></i>
                  <p>Login / Register</p>
                </div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="flex items-center">
                  <i className="fa-solid fa-cart-shopping mr-2"></i>
                  <p>1</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-heart mr-2"></i>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
