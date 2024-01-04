import React from "react";
import singleproduct1 from "../assets/singleproduct1.jpg";
import singleproduct2 from "../assets/singleproduct2.jpg";
import Carousel3 from "../components/Carousel3";

export default function SingleProduct() {
  return (
    <>
      <div className="single-product bg-verylightgray3">
        <div className="container mx-auto max-w-[1050px] min-h-[598px] flex flex-row item-center justify-center gap-7 mobile:flex-col mobile:px-10">
          <Carousel3 />
          <div className="right flex max-w-[510px] min-h[450px]">
            <div className="cardbody flex flex-col items-start gap-5">
              <h4 className="font-bold">Floating Phone</h4>
              <div className="stars flex gap-1 ">
                <i className="fa-solid fa-star text-yellowstar"></i>
                <i className="fa-solid fa-star text-yellowstar"></i>
                <i className="fa-solid fa-star text-yellowstar"></i>
                <i className="fa-solid fa-star text-yellowstar"></i>
                <i className="fa-solid fa-star text-yellowstar"></i>
                <h6>10 reviews</h6>
              </div>
              <h3 className="font-bold">$1,159.33</h3>
              <div className="price flex flex-row gap-3">
                <h6 className="text-lightgray">Availibility :</h6>
                <h6 className="text-turku font-bold">In Stock</h6>
              </div>
              <p className="">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr className="text-verylightgray max-w-[445px]"></hr>
              <div className="colors flex gap-1 ">
                <i className="fa-solid fa-circle text-turku"></i>
                <i className="fa-solid fa-circle text-secondarycolor1"></i>
                <i className="fa-solid fa-circle text-alertcolor"></i>
                <i className="fa-solid fa-circle text-darkblue"></i>
              </div>
              <div className="flex gap-3 pt-10">
                <button className="rounded bg-turku text-sm text-white font-bold px-5 py-2 ">
                  Select Options
                </button>
                <i className="fa-regular fa-heart border-solid border-2 border-verylightgray2 p-2 rounded-full"></i>
                <i className="fa-solid fa-cart-shopping border-solid border-2 round border-verylightgray2 p-2 rounded-full"></i>
                <i className="fa-regular fa-eye border-solid border-2 border-verylightgray2 p-2 rounded-full"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
