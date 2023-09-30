import React from "react";
import herocover2 from "../assets/herocover2.jpg";

export default function Carousel() {
  return (
    <>
      <div className="slider relative">
        <div className="slider-elements">
          <div className="slider-item-fade relative items-center min-h-[716px]">
            <img
              className="absolute w-[100%] top-0 left-0 -z-10"
              src={herocover2}
            ></img>

            <div className="container text-white flex flex-col justify-center gap-4 p-[10%] max-w-[1000px] ">
              <h5 className="font-bold">SUMMER 2020</h5>
              <h1 className="font-bold">NEW COLLECTION</h1>
              <h4 className="">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div>
                <button className="rounded bg-green text-lg font-bold px-5 py-2 ">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="slider-item-fade relative items-center min-h-[716px] hidden">
            <img
              className="absolute w-[100%] top-0 left-0 -z-10"
              src={herocover2}
            ></img>

            <div className="container text-white flex flex-col justify-center gap-4 p-[10%] max-w-[1000px] ">
              <h5 className="font-bold">SUMMER 2020</h5>
              <h1 className="font-bold">NEW COLLECTION</h1>
              <h4 className="">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div>
                <button className="rounded bg-green text-lg font-bold px-5 py-2 ">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="slider-buttons absolute top-0 left-0 items-center flex justify-between w-[100%] h-[100%] text-white text-5xl px-10">
            <i class="fa-solid fa-chevron-left "></i>
            <i class="fa-solid fa-chevron-right "></i>
          </div>
          <div className="slider-line absolute w-[100%] flex justify-center text-5xl bottom-4">
            <i class="fa-solid fa-minus text-white"></i>
            <i class="fa-solid fa-minus text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
}
