import React from "react";
import ProductListHeader from "./ProductListHeader";
import singleproduct1 from "../assets/singleproduct1.jpg";
import singleproduct2 from "../assets/singleproduct2.jpg";

export default function ProductPage() {
  return (
    <>
      <ProductListHeader />
      <div className="flex justify-center max-w-[1440px]">
        <div className="container bg-verylightgray3 flex justify-start items-center max-w-[1440px] min-h-[92px] px-10">
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i class="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="">Shop</h6>
          </div>
        </div>
      </div>

      {/* product slider */}
      <div className="single-product">
        <div className="container mx-auto max-w-[1440px] min-h-[598px] flex flex-row item-center justify-center gap-7 bg-verylightgray3">
          <div className="left flex flex-col gap-5">
            <div className="slider-area flex gap-5">
              <img src={singleproduct1} />
            </div>
            <div className="below-slider flex flex-row max-w-[100px] min-h-[75px] gap-5">
              <img src={singleproduct1} />
              <img src={singleproduct2} />
            </div>
          </div>
          <div className="right">
            <div className="cardbody flex flex-auto flex-col items-start gap-2 py-6">
              <h4 className="font-bold">Floating Phone</h4>
              <div className="stars flex gap-1 ">
                <i class="fa-solid fa-star text-yellowstar"></i>
                <i class="fa-solid fa-star text-yellowstar"></i>
                <i class="fa-solid fa-star text-yellowstar"></i>
                <i class="fa-solid fa-star text-yellowstar"></i>
                <i class="fa-solid fa-star text-yellowstar"></i>
                <h6>10 reviews</h6>
              </div>
              <h3 className="font-bold">$1,159.33</h3>
              <div className="price flex flex-row gap-3">
                <h5 className="text-lightgray">Availibility :</h5>
                <h5 className="text-turku font-bold">In Stock</h5>
              </div>
              <p className="">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="colors flex gap-1 ">
                <i class="fa-solid fa-circle text-turku"></i>
                <i class="fa-solid fa-circle text-secondarycolor1"></i>
                <i class="fa-solid fa-circle text-alertcolor"></i>
                <i class="fa-solid fa-circle text-darkblue"></i>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
