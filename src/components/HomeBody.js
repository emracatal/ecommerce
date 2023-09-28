import React from "react";

import Productcard from "./Productcard";
import containerfluid from "../assets/containerfluid.png";
import Blogcard from "./Blogcard";

export default function HomeBody() {
  const products = [
    { id: 1, name: "product1", price: 19.99 },
    { id: 2, name: "product2", price: 19.99 },
    { id: 3, name: "product3", price: 39.99 },
    { id: 4, name: "product4", price: 49.99 },
    { id: 5, name: "product5", price: 19.99 },
    { id: 6, name: "product6", price: 19.99 },
    { id: 7, name: "product7", price: 19.99 },
    { id: 8, name: "product8", price: 19.99 },
    { id: 9, name: "product9", price: 19.99 },
    { id: 10, name: "product10", price: 19.99 },
  ];

  const blogs = [
    { id: 1, name: "blog1", price: 19.99 },
    { id: 2, name: "blog2", price: 19.99 },
    { id: 3, name: "blog3", price: 39.99 },
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

      {/* productcards */}
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

      {/* slider2 */}
      <div className="slider-area bg-carousel2 min-h-[716px] ">
        <div className="container text-white flex flex-col justify-center gap-4 p-[10%] max-w-[1440px] ">
          <h5 className="font-bold">SUMMER 2020</h5>
          <h1 className="font-bold">Vita Classic Product</h1>
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

      {/* slider3 */}
      <div className="slider-area min-h-[716px] ">
        <div className="container flex flex-row justify-center gap-4 p-[10%] max-w-[1440px] ">
          <img
            src={containerfluid}
            alt="containerfluid"
            className="w-[704px] h-[682px]"
          ></img>{" "}
          <div className="container flex flex-col justify-center gap-4 ">
            <h5 className="font-bold">SUMMER 2020</h5>
            <h1 className="font-bold">Part of the Neural Universe</h1>
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
      </div>

      {/* productcards */}
      <div className="bestseller">
        <div className="container flex flex-col gap-12 items-center max-w-[1440px] py-20">
          <div className="text-area">
            <div className="text-area text-center">
              <h6 className="text-turku">Practice Advice</h6>
              <h2 className="font-bold">Featured Posts</h2>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
        <div className="bestseller-products container flex flex-row flex-wrap gap-7 justify-center ">
          {blogs.map((blog) => (
            <Blogcard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
