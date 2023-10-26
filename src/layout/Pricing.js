import React from "react";
import { Link } from "react-router-dom";
import formcheckinput from "../assets/formcheckinput.svg";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";

export default function Pricing() {
  return (
    <>
      {/* header light */}
      <HeaderHome />

      {/*SIMPLE PRICING */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-14 py-12">
          <h5 className="font-bold text-lightgray">PRICING</h5>
          <h1 className="font-bold text-center">Simple Pricing</h1>
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i className="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="text-lightgray">Pricing</h6>
          </div>
        </div>
      </div>

      {/*PRICING */}
      <div className="bg-verylightgray3">
        <div className="container max-w-[1050px] mx-auto min-h-[800PX] flex flex-col justify-center items-center gap-14 py-14 mobile:px-5">
          <h2 className="font-bold items-center">Pricing</h2>
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
          <div className="image-area flex flex-row items-end mobile:flex mobile:flex-col">
            <div className="image-area-free flex flex-col items-center justify-center gap-4 py-10 rounded-md border border-turku w-[33%] mobile:w-[100%]">
              <h3 className="font-bold">FREE</h3>
              <h5 className="font-bold text-lightgray text-center">
                Organize across all apps by hand
              </h5>
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-turku">0</h2>
                <div className="flex flex-col">
                  <i className="fa-solid fa-dollar-sign text-turku"></i>
                  <h6 className="text-lightblue">Per Month</h6>
                </div>
              </div>

              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <button className="text-white bg-darkblue text-sm rounded-md py-4 px-9">
                Try for free
              </button>
            </div>
            <div className="image-area-standard flex flex-col items-center justify-center gap-4 py-10 w-[33%] mobile:w-[100%] rounded-md border border-turku bg-darkblue min-h-[550px]">
              <h3 className="font-bold text-white">STANDARD</h3>
              <h5 className="font-bold text-white text-center">
                Organize across all apps by hand
              </h5>
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-turku">9.99</h2>
                <div className="flex flex-col">
                  <i className="fa-solid fa-dollar-sign text-turku"></i>
                  <h6 className="text-lightblue">Per Month</h6>
                </div>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold text-white">
                  Unlimited product updates
                </h6>
              </div>
              <button className="text-white bg-turku text-sm rounded-md py-4 px-9">
                Try for free
              </button>
            </div>
            <div className="image-area-premium flex flex-col items-center justify-center gap-4 py-10 rounded-md border border-turku w-[33%] mobile:w-[100%]">
              <h3 className="font-bold">PREMIUM</h3>
              <h5 className="font-bold text-lightgray text-center">
                Organize across all apps by hand
              </h5>
              <div className="flex flex-row items-center gap-4">
                <h2 className="text-turku">0</h2>
                <div className="flex flex-col">
                  <i className="fa-solid fa-dollar-sign text-turku"></i>
                  <h6 className="text-lightblue">Per Month</h6>
                </div>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-green"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-lightgray"></i>
                <h6 className="font-bold">Unlimited product updates</h6>
              </div>
              <div className="flex flex-row">
                <i className="fa-regular fa-circle-check text-lightgray"></i>
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

      {/*Start your 14 days free trial */}
      <div className="">
        <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-7 py-10 mobile:p-14">
          <h2 className="font-bold text-center">
            Start your 14 days free trial
          </h2>
          <h6 className=" text-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </h6>
          <button className="text-white text-sm bg-turku p-3 rounded-md flex flex-row gap-2 items-center">
            <h6>Try it free now</h6>
          </button>
          <div className="flex gap-8 text-3xl text-turku">
            <i className="fa-brands fa-twitter "></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
