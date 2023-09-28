import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <>
      <div className="navbar-dark bg-darkBlue text-white flex justify-between h-14 items-center">
        <div className="flex gap-10 pl-9">
          <div className=" phoneNumber flex gap-1">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p>(225)555-0118</p>
            </div>
          </div>
          <div className="email flex gap-1">
            <div>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
        </div>
        <div className="navbarText flex">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="navBarRight flex gap-2 pr-9">
          <div>
            <p>Follow Us:</p>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div></div>
          <div>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className="navbar-light flex h-16 items-center justify-between">
        <div className="navbar-light-left flex gap-32 pl-9">
          <div className="navbar-light-bandageText text-darkBlue text-2xl font-bold">
            Bandage
          </div>
          <div className="nav">
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
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Pages">Pages</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-light-right flex text-turku gap-4 items-center pr-9">
          <i className="fa-regular fa-user"></i>
          <p className="">Login / Register</p>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <p>1</p>
          <i className="fa-regular fa-heart"></i>
          <p>1</p>
        </div>
      </div>
    </>
  );
}
