import React from "react";
import HeaderHome from "./HeaderHome";
import SingleProduct from "./SingleProduct";
import Productcard3 from "./Productcard3";
import singleproduct3 from "../assets/singleproduct3.png";
import Clients from "./Clients";
import Footer from "./Footer";

export default function ProductPage() {
  const products = [
    { id: 1, name: "product1", price: 19.99 },
    { id: 2, name: "product2", price: 19.99 },
    { id: 3, name: "product3", price: 39.99 },
    { id: 4, name: "product4", price: 49.99 },
    { id: 5, name: "product5", price: 19.99 },
    { id: 6, name: "product6", price: 19.99 },
    { id: 7, name: "product7", price: 19.99 },
    { id: 8, name: "product8", price: 19.99 },
  ];

  return (
    <>
      <HeaderHome />
      <div className="flex justify-center  bg-verylightgray3">
        <div className="container flex justify-start items-center max-w-[1050px] mx-auto min-h-[92px] mobile:flex mobile:justify-center mobile:items-center">
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i className="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="">Shop</h6>
          </div>
        </div>
      </div>

      {/* product slider */}
      <SingleProduct />
      {/* singleproduct product description*/}
      <div className="flex ">
        <div className="container max-w-[1050px] mx-auto min-h-[72px] flex flex-row items-center justify-center gap-10 mobile:px-10 ">
          <p className="font-bold text-lightgray">Description</p>
          <p className="font-bold text-lightgray">Additional Information</p>
          <div className="flex flex-row gap-1">
            <p className="font-bold text-lightgray"> Reviews</p>
            <p className="text-green font-bold">(0)</p>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="container max-w-[1050px] min-h-[500px] mx-auto flex flex-row justify-center gap-7 mobile:flex-col mobile:items-center mobile:px-10 mobile:w-[80%]">
          <div className="min-w-[30%]">
            <img src={singleproduct3} className="object-cover" />
          </div>
          <div className="flex flex-col gap-7 min-w-[30%] ">
            <h3 className="font-bold">the quick fox jumps over</h3>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met. Met minim Mollie non desert
              Alamo est sit cliquey dolor do met sent. RELIT official consequent
              door ENIM RELIT Mollie. Excitation venial consequent sent nostrum
              met. Met minim Mollie non desert Alamo est sit cliquey dolor do
              met sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col gap-7 min-w-[30%]">
            <div>
              <h3 className="font-bold">the quick fox jumps over</h3>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
            </div>
            <div>
              <h3 className="font-bold">the quick fox jumps over</h3>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bestseller */}
      <div className="flex  bg-verylightgray3">
        <div className="flex mx-auto max-w-[1050px] flex-col gap-6 py-12 ">
          <h3 className="font-bold pl-3 mobile:text-center">
            BESTSELLER PRODUCTS
          </h3>
          <div className="bestseller-products-container flex flex-row flex-wrap gap-5 items-center justify-center">
            {products.map((product, i) => (
              <Productcard3 key={i} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* clients */}
      <Clients />
      <Footer />
    </>
  );
}
