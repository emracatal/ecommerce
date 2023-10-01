import React from "react";

export default function HomeFooter() {
  return (
    <>
      <div className="footer flex flex-col">
        <div className="flex justify-center max-w-[1440px]">
          <div className="container bg-verylightgray3 flex justify-between items-center max-w-[1440px] px-40 py-10">
            <div className="text-darkblue font-bold flex gap-2 ">
              <h3>Bandage</h3>
            </div>
            <div className="flex text-turku items-center gap-3 ">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap max-w-[1440px]">
          <div className="container justify-between flex flex-wrap pl-40 py-12">
            <ul>
              <h5 className="font-bold pb-5">Company Info</h5>
              <li className="text-sm text-lightgray font-bold pb-2">About Us</li>
              <li className="text-sm text-lightgray font-bold pb-2">Carrier</li>
              <li className="text-sm text-lightgray font-bold pb-2">We are hiring</li>
              <li className="text-sm text-lightgray font-bold pb-7">Blog</li>
            </ul>

            <ul>
            <h5 className="font-bold pb-5">Legal</h5>
              <li className="text-sm text-lightgray font-bold pb-2">About Us</li>
              <li className="text-sm text-lightgray font-bold pb-2">Carrier</li>
              <li className="text-sm text-lightgray font-bold pb-2">We are hiring</li>
              <li className="text-sm text-lightgray font-bold pb-7">Blog</li>
            </ul>

            <ul>
            <h5 className="font-bold pb-5">Features</h5>
              <li className="text-sm text-lightgray font-bold pb-2">
                Business Marketing
              </li>
              <li className="text-sm text-lightgray font-bold pb-2">User Analytic</li>
              <li className="text-sm text-lightgray font-bold pb-2">Live Chat</li>
              <li className="text-sm text-lightgray font-bold pb-7">Unlimited Support</li>
            </ul>

            <ul>
            <h5 className="font-bold pb-5">Resources</h5>
              <li className="text-sm text-lightgray font-bold pb-2">IOS & Android</li>
              <li className="text-sm text-lightgray font-bold pb-2">Watch a Demo</li>
              <li className="text-sm text-lightgray font-bold pb-2">Customers</li>
              <li className="text-sm text-lightgray font-bold pb-7">API</li>
            </ul>
            <div className="flex flex-col gap-5">
              <h5 className="font-bold">Get in touch</h5>
              <form className="border-solid border-2 border-verylightgray2">
                <input
                  type="email"
                  className=" text-center bg-verylightgray"
                  placeholder="Your Email"
                ></input>
                <button className="text-white bg-turku p-3">Subscribe</button>
              </form>
              <p className=" text-lightgray">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>

        <div className="container bg-verylightgray3 flex justify-between items-center max-w-[1440px] px-40 py-6">
          <p className="text-lightgray bg-verylightgray3">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
}
