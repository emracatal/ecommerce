import React from "react";
import containerfluid from "../assets/containerfluid.png";

export default function HomeHeader() {
  return (
    <>
      <div className="carousel bg-herocover2 h-[716px]">
        <div className="carousel-inner p-48 text-white h-[716px] flex flex-col justify-center gap-12 ">
          <p className="text-base font-bold">SUMMER 2020</p>
          <p className="text-6xl font-bold">NEW COLLECTION</p>
          <p className="text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <div>
            <button className="rounded bg-green text-xl font-bold px-10 py-4">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="shop-cards flex flex-col bg-white gap-12 py-20">
        <div className="flex flex-col items-center gap-3 px-48">
          <p className="text-black text-2xl font-bold">EDITOR’S PICK</p>
          <p className="text-black text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex flex-row gap-8 px-48">
          <div className="min-w-[510px] min-h-[500px] bg-shopcardMan flex flex-col justify-end p-5">
            <div className="bg-white text-base font-bold w-40 h-12 text-center">
              MAN
            </div>
          </div>
          <div className="min-w-[240px] min-h-[500px] bg-shopcardWomen flex flex-col justify-end p-5">
            <div className="bg-white text-base font-bold w-40 h-12 text-center">
              WOMEN
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="min-w-[240px] min-h-[242px] bg-shopcardAcc flex flex-col justify-end p-5">
              <div className="bg-white text-base font-bold w-40 h-12 text-center">
                ACCESSORIES
              </div>
            </div>
            <div className="min-w-[240px] min-h-[242px] bg-shopcardKids flex flex-col justify-end p-5">
              <div className="bg-white text-base font-bold w-40 h-12 text-center">
                KIDS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-cards h-[1652PX] flex flex-col bg-white gap-12 py-20">
        <div className="flex flex-col items-center gap-3 px-48">
          <p className="text-black text-lg">Featured Products</p>
          <p className="text-black text-2xl font-bold">BESTSELLER PRODUCTS</p>
          <p className="text-black text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div>BURAYA 8 PRODUCTCARD GELECEK</div>
      </div>

      <div className="carousel2 bg-carousel2 h-[716px]">
        <div className="carousel-inner w-[900px] p-48 text-white h-[716px] flex flex-col justify-center gap-12 ">
          <p className="text-base font-bold">SUMMER 2020</p>
          <p className="text-6xl font-bold">Vita Classic Product</p>
          <p className="text-lg">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex justify-start items-center gap-10">
            <p className="text-2xl">$16.48</p>
            <button className="rounded bg-green text-base font-bold px-10 py-4">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid h-[682px] px-32 flex gap-36">
        <img src={containerfluid} alt="containerfluid"></img>
        <div className="container-fluid-inner text-white w-[375px] flex flex-col justify-center gap-12 ">
          <p className="text-base font-bold text-gray">SUMMER 2020</p>
          <p className="text-4xl font-bold text-black">
            Part of the Neural Universe
          </p>
          <p className="text-lg text-black">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex justify-start items-center gap-10">
            <button className="rounded bg-green text-base font-bold px-10 py-4">
              BUY NOW
            </button>
            <button className="rounded border-2 border-green bg-white text-green font-bold px-10 py-4">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <div className="blog h-[1044px] flex flex-col bg-white gap-12 py-20">
        <div className="flex flex-col items-center gap-3 px-48">
          <p className="text-turku text-SM">Practice Advice</p>
          <p className="text-black text-4xl font-bold">Featured Products</p>
          <p className="w-[450px] text-black text-sm text-center">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics

          </p>
        </div>
        <div>BURAYA 3 BLOGCARD GELECEK</div>
      </div>
    </>
  );
}
