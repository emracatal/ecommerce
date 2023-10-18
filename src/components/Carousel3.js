import React from "react";
import singleproduct1 from "../assets/singleproduct1.jpg";
import singleproduct2 from "../assets/singleproduct2.jpg";
export default function Carousel3() {
  return (
    <>
      <div className="carousel w-full mobile:h-[300px] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={singleproduct1}
            className="mobile:w-full mobile:h-full object-cover"
          />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white text-4xl">
              ❮
            </a>
            <a href="#slide2" className="text-white text-4xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={singleproduct2}
            className="w-full mobile:object-cover"
          />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white text-4xl">
              ❮
            </a>
            <a href="#slide1" className="text-white text-4xl">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
