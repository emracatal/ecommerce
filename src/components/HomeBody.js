import React from "react";
import Productcard from "./Productcard";

export default function HomeBody() {
  const products = [
    { id: 1, name: "Ürün1", price: 19.99 },
    { id: 2, name: "Ürün2", price: 19.99 },
    { id: 3, name: "Ürün3", price: 39.99 },
    { id: 4, name: "Ürün4", price: 49.99 },
    { id: 5, name: "Ürün5", price: 19.99 },
    { id: 6, name: "Ürün6", price: 19.99 },
    { id: 7, name: "Ürün7", price: 19.99 },
    { id: 8, name: "Ürün8", price: 19.99 },
    { id: 9, name: "Ürün9", price: 19.99 },
    { id: 10, name: "Ürün10", price: 19.99 },
  ];
  return (
    <>
      {/* slider */}
      <div className="slider-area bg-herocover2 min-h-[716px] ">
        <div className="container text-white flex flex-col justify-center gap-4 p-[10%] max-w-[1440px] ">
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
      {/* editorspick */}
      <div className="shop-cards">
        <div className="container flex flex-col gap-12 items-center max-w-[1440px] py-20">
          <div className="text-area text-center">
            <h3 className="font-bold">EDITOR'S PICK</h3>
            <p>Problems trying to resolve the conflict between</p>
          </div>
          <div className="shop-cards-images flex flex-row gap-7">
            <div className="men bg-shopcardMan w-[509px] h-[500px]">
              <h5 className="bg-white font-bold w-[30%] text-center ">MEN</h5>
            </div>
            <div className="men bg-shopcardWomen w-[239px] h-[500px]">
              <h5 className="bg-white font-bold w-[30%] text-center">MEN</h5>
            </div>

            <div className="flex flex-col gap-4">
              <div className="accessories bg-shopcardAcc w-[239px] h-[242px]">
                <h5 className="bg-white font-bold w-[30%] text-center">MEN</h5>
              </div>
              <div className="kids bg-shopcardKids w-[239px] h-[242px]">
                <h5 className="bg-white font-bold w-[30%] text-center">MEN</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bestseller">
        <div className="container flex flex-col gap-12 items-center max-w-[1440px] py-20">
          <div className="text-area">
            <div className="text-area text-center">
              <h4>Featured Products</h4>
              <h3 className="font-bold">BESTSELLER PRODUCTS</h3>
              <p>Problems trying to resolve the conflict between</p>
            </div>
          </div>
        </div>
        <div className="bestseller-products container flex flex-row flex-wrap gap-7 justify-center ">
          {products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
