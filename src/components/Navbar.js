import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar-dark bg-darkBlue text-white flex justify-between h-14 items-center">
        <div className="flex gap-10 pl-9">
          <div className=" phoneNumber flex gap-1">
            <div>
              <i class="fa-solid fa-phone"></i>
            </div>
            <div>
              <p>(225)555-0118</p>
            </div>
          </div>
          <div className="email flex gap-1">
            <div>
              <i class="fa-regular fa-envelope"></i>
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
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div>
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div></div>
          <div>
            <i class="fa-brands fa-twitter"></i>
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
            <li>Home</li>
            <li>Shop</li>
            <i class="fa-solid fa-chevron-down fa-sm self-center"></i>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
        </div>
        <div className="navbar-light-right flex text-turku gap-4 items-center pr-9">
        <i class="fa-regular fa-user"></i>
        <p className="">Login / Register</p>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <p>1</p>
        <i class="fa-regular fa-heart"></i>
        <p>1</p>
        </div>
      </div>
    </>
  );
}
