import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar-dark bg-secondarycolor1 text-white px-40 h-[50px] pt-3 mb-0 hidden md:flex ">
        <div className="container max-w-[1440px] w-[100%] flex flex-wrap justify-between "> 
            <div className="phoneNumber flex items-center space-x-2 mb-4 md:mb-0 hidden md:flex"> 
                <i className="fa-solid fa-phone "></i>
                <p>(225)555-0118</p>
            </div>
            
            <div className="email flex items-center space-x-2 mb-4 md:mb-0 hidden md:flex">
                <i className="fa-regular fa-envelope"></i>
                <p className="font-light">michelle.rivera@example.com</p>
            </div>
            
            <div className="navbarText mb-4 md:mb-0 font-bold">
                <p>Follow Us and get a chance to win 80% off</p>
            </div>
            
            <div className="navBarRight flex items-center space-x-4 font-bold">
                <p>Follow Us:</p>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
      </div>

      <div className="navbar-light text-black px-40 pt-3">
        <div onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer px-4 py-2"> {/* hamburger menu icin */}
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`${menuOpen ? '' : 'hidden'} md:block`}> {/* hamburger menu icin */}
          <div className="container max-w-[1440px] w-[100%]">
            <div className="navbar-light-inner flex flex-col md:flex-row justify-between items-center">
              <div className="navbar-light-bandageText mb-4 md:mb-0">
                <h3>Bandage</h3>
              </div>
              <div className="nav mb-4 md:mb-0">
                <ul className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-4">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/ProductList">Shop</Link></li>
                  <i className="fa-solid fa-chevron-down fa-sm"></i>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Blog">Blog</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
                  <li><Link to="/Pages">Pages</Link></li>
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