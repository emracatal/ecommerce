import React from "react";

export default function HomeFooter() {
  return (
    <>
      <div className=" flex justify-center bg-verylightgray3">
        <div className="container text-white flex flex-row justify-evenly gap-4 py-10 max-w-[1440px] ">
          <div className="text-darkblue font-bold">
            <h3>Bandage</h3>
          </div>

          <div className="flex text-turku items-center gap-3 ">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>

      <div className="flex gap-10 justify-between flex-wrap px-48 py-12">
        <div className="">
          <ul>
            <p className="text-base font-bold pb-5">Company Info</p>
            <li className="text-sm text-lightgray pb-2">About Us</li>
            <li className="text-sm text-lightgray pb-2">Carrier</li>
            <li className="text-sm text-lightgray pb-2">We are hiring</li>
            <li className="text-sm text-lightgray pb-2">Blog</li>
          </ul>
        </div>

        <div className="">
          <ul>
            <p className="text-base font-bold pb-5">Legal</p>
            <li className="text-sm text-lightgray pb-2">About Us</li>
            <li className="text-sm text-lightgray pb-2">Carrier</li>
            <li className="text-sm text-lightgray pb-2">We are hiring</li>
            <li className="text-sm text-lightgray pb-2">Blog</li>
          </ul>
        </div>

        <div className="">
          <ul>
            <p className="text-base font-bold pb-5">Features</p>
            <li className="text-sm text-lightgray pb-2">Business Marketing</li>
            <li className="text-sm text-lightgray pb-2">User Analytic</li>
            <li className="text-sm text-lightgray pb-2">Live Chat</li>
            <li className="text-sm text-lightgray pb-2">Unlimited Support</li>
          </ul>
        </div>

        <div className="">
          <ul>
            <p className="text-base font-bold pb-5">Resources</p>
            <li className="text-sm text-lightgray pb-2">IOS & Android</li>
            <li className="text-sm text-lightgray pb-2">Watch a Demo</li>
            <li className="text-sm text-lightgray pb-2">Customers</li>
            <li className="text-sm text-lightgray pb-2">API</li>
          </ul>
        </div>
        <div className="">
          <p className="text-base font-bold pb-5">Get in touch</p>
          <form className="border-solid border-2 border-verylightgray2 bg-verylightgray">
            <input
              type="email"
              className=" text-center"
              placeholder="Your Email"
            ></input>
            <button className="text-white bg-turku p-4">Subscribe</button>
          </form>
          <p className="text-xs text-lightgray">Lore imp sum dolor Amit</p>
        </div>
      </div>

      <p className="text-sm px-48 py-6 text-lightgray bg-verylightgray3">
        Made With Love By Finland All Right Reserved
      </p>
    </>
  );
}
