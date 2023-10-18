import React from "react";
import { Link } from "react-router-dom";
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";

export default function Contact() {
  return (
    <>
      {/* header light */}
      <HeaderHome />

      {/* GET IN TOUCH body */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[742px] ">
          <div className="-item-fade relative items-center  ">
            <div className="container text-black flex flex-col justify-center gap-4 pt-[15%] max-w-[600px] mobile:flex mobile:items-center mobile:justify-center mobile:text-center mobile:p-10">
              <h5 className="font-bold ">CONTACT US</h5>
              <h1 className="font-bold"><Link to="/SignUp">Get in touch today!</Link></h1>
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
            <div className="mobile:hidden">
            <img
              className="absolute w-[100%] top-0 left-0 -z-10"
              src={contact1}
            ></img>
            </div>
            <div className="hidden mobile:flex mobile:justify-center mobile:p-10">
            <img
              className=""
              src={contact2}
            ></img>
            </div>
          </div>
        </div>
      </div>

      {/* We help small businesses... */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[550px] flex flex-col gap-14 mobile:p-14">
          <div className="text-area text-center">
            <h6 className="font-bold">VISIT OUR OFFICE</h6>
            <h2 className="font-bold">
              We help small businesses with big ideas
            </h2>
          </div>
          <div className="image-area flex flex-row items-center justify-center mobile:flex mobile:flex-col">
            <div className="image-area-left flex flex-col items-center justify-center gap-4 py-10 w-[33%] mobile:w-[100%]">
              <i className="fa-solid fa-phone text-7xl text-turku"></i>
              <h6 className="font-bold">georgia.young@example.com</h6>
              <h6 className="font-bold">georgia.young@ple.com</h6>
              <h5 className="font-bold">Get Support</h5>
              <button className="text-turku border border-turku rounded-full py-4 px-9">
                Submit Request
              </button>
            </div>
            <div className="image-area-mid flex flex-col items-center justify-center gap-4 py-10 w-[33%] mobile:w-[100%] bg-darkblue">
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
            <div className="image-area-right flex flex-col items-center justify-center gap-4 py-10 w-[33%] mobile:w-[100%]">
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
          <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-14 mobile:p-14">
            <h5 className="font-bold">WE Can't WAIT TO MEET YOU</h5>
            <h1 className="font-bold">Let's Talk</h1>
            <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center">
              <h6><Link to="/ContactForm">Try it free now</Link></h6>
            </button>
          </div>
      </div>

      <Footer />
    </>
  );
}
