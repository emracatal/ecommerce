import React from "react";
import HomeHeader from "./HeaderHome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function OrderConfirm() {
  return (
    <>
      <HomeHeader />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-2 mobile:flex mobile:flex-col mobile:py-2 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2">
            <h3>Order Confirm</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className="container max-w-[1050px] mx-auto min-h-[188px] flex flex-col justify-center items-center gap-8 py-12">
            <i class="fa-regular fa-circle-check text-turku text-8xl"></i>
            <h3 className="font-bold text-center ">
              Thank you for your order!
              <Link to="/ordersList" className="text-turku">
                Track your order
              </Link>
            </h3>
            <div className="flex items-center gap-3 ">
              <div className="flex gap-0">
                <Link to="/shopping">
                  <button className="rounded bg-turku text-sm text-white font-bold px-5 py-2 ">
                    Contuniue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
