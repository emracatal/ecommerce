import React from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <>
    <div className="navbar-dark bg-secondarycolor1 text-white px-40">
      <div className="container max-w-[1440px] w-[100%]">
      <div className="">
          <div className=" phoneNumber ">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p>(225)555-0118</p>
            </div>
          </div>
          <div className="email">
            <div>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
        </div>
        <div className="navbarText ">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="navBarRight ">
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

    </div>
    <div className="navbar-light text-black px-40">
    <div className="container max-w-[1440px] w-[100%]">
      <div className="navbar-light-inner flex justify-between items-center">
      <div className="navbar-light-bandageText">
            <h3>Bandage</h3>
          </div>
          <div className="nav">
            <ul className="flex items-center gap-x-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ProductList">Shop</Link>
              </li>
              <i className="fa-solid fa-chevron-down fa-sm"></i>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Pages">Pages</Link></li>
            </ul>
          </div>
          <div className="navbar-light-right text-turku flex items-center gap-x-4">
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
    </div>
    </>
  );
}
