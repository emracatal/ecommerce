import React from "react";
import herocover2 from "../assets/herocover2.jpg";
import carousel2 from "../assets/carousel2.png";
export default function Carousel() {
  return (
    <>
      <div className="carousel w-full mobile:h-[750px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={herocover2} className="w-full mobile:object-cover" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white text-4xl">
              ❮
            </a>
            <div className="container text-white flex flex-col justify-center gap-4 px-5 max-w-[1000px] ">
              <h5 className="font-bold">SUMMER 2020</h5>
              <h1 className="font-bold">en havalı MEHMET KAAN</h1>
              <h4 className="">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div>
                <button className="rounded bg-green text-lg font-bold px-5 py-2 ">
                  SHOP NOW
                </button>
              </div>
            </div>

            <a href="#slide2" className="text-white text-4xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={carousel2} className="w-full mobile:object-cover" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white text-4xl">
              ❮
            </a>
            <div className="container text-white flex flex-col justify-center gap-4 px-5 max-w-[1000px] ">
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
            <a href="#slide1" className="text-white text-4xl">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
