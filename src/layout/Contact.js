import React from "react";
import { Link } from "react-router-dom";
import contact1 from "../assets/contact1.png";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      {/* header light */}
      <div className="navbar-light flex justify-center">
        <div className="container flex flex-grow justify-between items-center min-h-[91px] max-w-[1050px] mx-auto">
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
            <h6 className="">Login</h6>
            <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center">
              <h6>Become a member</h6>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* GET IN TOUCH body */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[742px]  ">
          <div className="-item-fade relative items-center  ">
            <div className="container text-black flex flex-col justify-center gap-4 pt-[15%] max-w-[600px] ">
              <h5 className="font-bold">CONTACT US</h5>
              <h1 className="font-bold">Get in touch today!</h1>
              <h4 className="">
                We know how large objects will act, but things on a small scale
              </h4>
              <h3 className="font-bold">Phone : +451 215 215</h3>
              <h3 className="font-bold">Fax : +451 215 215</h3>
              <div className="flex gap-8 text-3xl">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
            <img
              className="absolute w-[100%] top-0 left-0 -z-10"
              src={contact1}
            ></img>
          </div>
        </div>
      </div>

      {/* We help small businesses... */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[550px] flex flex-col gap-14">
          <div className="text-area text-center">
            <h6 className="font-bold">VISIT OUR OFFICE</h6>
            <h2 className="font-bold">
              We help small businesses with big ideas
            </h2>
          </div>
          <div className="image-area flex flex-row items-center justify-center ">
            <div className="image-area-left flex flex-col items-center gap-4 py-10 w-[33%]">
              <i className="fa-solid fa-phone text-7xl text-turku"></i>
              <h6 className="font-bold">georgia.young@example.com</h6>
              <h6 className="font-bold">georgia.young@ple.com</h6>
              <h5 className="font-bold">Get Support</h5>
              <button className="text-turku border border-turku rounded-full py-4 px-9">
                Submit Request
              </button>
            </div>
            <div className="image-area-mid flex flex-col items-center gap-4 py-10 w-[33%] bg-darkblue">
              <i className="fa-solid fa-location-dot text-7xl text-turku"></i>
              <h6 className="font-bold text-white">
                georgia.young@example.com
              </h6>
              <h6 className="font-bold text-white">georgia.young@ple.com</h6>
              <h5 className="font-bold text-white">Get Support</h5>
              <button className="text-turku border border-turku rounded-full py-4 px-9">
                Submit Request
              </button>
            </div>
            <div className="image-area-right flex flex-col items-center gap-4 py-10 w-[33%]">
              <i className="fa-solid fa-envelope text-7xl text-turku"></i>
              <h6 className="font-bold">georgia.young@example.com</h6>
              <h6 className="font-bold">georgia.young@ple.com</h6>
              <h5 className="font-bold">Get Support</h5>
              <button className="text-turku border border-turku rounded-full py-4 px-9">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*LET'S TALK */}
        <div className="">
          <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-14">
            <h5 className="font-bold">WE Can't WAIT TO MEET YOU</h5>
            <h1 className="font-bold">Let's Talk</h1>
            <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center">
              <h6>Try it free now</h6>
            </button>
          </div>
      </div>

      <Footer />
    </>
  );
}
