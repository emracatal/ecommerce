import React from 'react'
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      {/* header light */}
      <div className="navbar-light flex justify-center">
        <div className="container flex flex-grow justify-between items-center min-h-[91px] max-w-[1050px] mx-auto">
          <div className="navbar-light-left text-darkblue font-bold flex gap-2">
            <h3>Bandage</h3>
          </div>
          <nav className="navbar-light-middle text-darkblue items-center gap-2 ">
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
            <h6 className="">Login</h6>
              <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center">
                <h6>Become a member</h6>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
        </div>
      </div>

            {/*WHAT WE DO */}
            <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-14 py-12">
          <h5 className="font-bold text-lightgray">WHAT WE DO</h5>
          <h1 className="font-bold">Innovation tailored for you</h1>
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i class="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="text-lightgray">Team</h6>
          </div>
        </div>
      </div>
    </>
  )
}
