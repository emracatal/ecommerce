import React from "react";
import { Link } from "react-router-dom";
import formcheckinput from "../assets/formcheckinput.svg";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

export default function Pricing() {
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

      {/*SIMPLE PRICING */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-14 py-12">
          <h5 className="font-bold text-lightgray">PRICING</h5>
          <h1 className="font-bold">Simple Pricing</h1>
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i class="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="text-lightgray">Pricing</h6>
          </div>
        </div>
      </div>

      {/*PRICING */}
      <div className="bg-verylightgray3">
        <div className="container max-w-[1050px] mx-auto min-h-[800PX] flex flex-col justify-center items-center gap-14">
          <h2 className="font-bold">Pricing</h2>
          <h6 className="">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h6>
          <div className="flex flex-row gap-4 items-center">
            <h5 className="font-bold">Monthly</h5>
            <img src={formcheckinput}></img>
            <h5 className="font-bold">Yearly</h5>
            <button className="rounded-full bg-lightblue text-lg text-turku font-bold px-5 py-2 ">
              Save 25%
            </button>
          </div>
          <div className="image-area flex flex-row items-end">
            <div className="image-area-free flex flex-col items-center justify-center gap-4 py-10 rounded-md border border-turku w-[33%]">
              <h3 className="font-bold">FREE</h3>
              <h5 className="font-bold text-lightgray text-center">
                Organize across all apps by hand
              </h5>
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-turku">0</h2>
                <div className="flex flex-col">
                  <i class="fa-solid fa-dollar-sign text-turku"></i>
                  <h6 className="text-lightblue">Per Month</h6>
                </div>
              </div>

              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <button className="text-white bg-darkblue text-sm rounded-md py-4 px-9">
                Try for free
              </button>
            </div>
            <div className="image-area-standard flex flex-col items-center justify-center gap-4 py-10 w-[33%] rounded-md border border-turku bg-darkblue min-h-[550px]">
              <h3 className="font-bold text-white">STANDARD</h3>
              <h5 className="font-bold text-white text-center">
                Organize across all apps by hand
              </h5>
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-turku">9.99</h2>
                <div className="flex flex-col">
                  <i class="fa-solid fa-dollar-sign text-turku"></i>
                  <h6 className="text-lightblue">Per Month</h6>
                </div>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <button className="text-white bg-turku text-sm rounded-md py-4 px-9">
                Try for free
              </button>
            </div>
            <div className="image-area-premium flex flex-col items-center justify-center gap-4 py-10 rounded-md border border-turku w-[33%]">
              <h3 className="font-bold">PREMIUM</h3>
              <h5 className="font-bold text-lightgray text-center">
                Organize across all apps by hand
              </h5>
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-turku">0</h2>
                <div className="flex flex-col">
                  <i class="fa-solid fa-dollar-sign text-turku"></i>
                  <h6 className="text-lightblue">Per Month</h6>
                </div>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i class="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <button className="text-white bg-darkblue text-sm rounded-md py-4 px-9">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>
      <Clients />
    </>
  );
}
