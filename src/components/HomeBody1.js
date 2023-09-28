import React from "react";
import containerfluid from "../assets/containerfluid.png";

export default function HomeBody1() {
  return (
    <>
      <div className="carousel bg-herocover2 h-[400px] sm:h-[716px] bg-cover">
    <div className="carousel-inner p-4 sm:p-48 text-white h-[400px] sm:h-[716px] flex flex-col justify-center gap-4 sm:gap-12">
        <p className="text-sm sm:text-base font-bold">SUMMER 2020</p>
        <p className="text-3xl sm:text-6xl font-bold">NEW COLLECTION</p>
        <p className="text-sm sm:text-lg">
            We know how large objects will act, but things on a small scale.
        </p>
        <div>
            <button className="rounded bg-green text-lg sm:text-xl font-bold px-5 sm:px-10 py-2 sm:py-4">
                SHOP NOW
            </button>
        </div>
    </div>
    <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="45" viewBox="0 0 24 45" fill="none">
          <path fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M23.4993 43.7724C23.341 43.9302 23.1529 44.0554 22.9458 44.1408C22.7387 44.2263 22.5167 44.2703 22.2925 44.2703C22.0683 44.2703 21.8463 44.2263 21.6392 44.1408C21.4321 44.0554 21.244 43.9302 21.0857 43.7724L0.631107 23.4352C0.472368 23.2778 0.346428 23.0908 0.260496 22.8849C0.174566 22.679 0.130333 22.4582 0.130333 22.2353C0.130333 22.0124 0.174566 21.7917 0.260496 21.5858C0.346428 21.3799 0.472368 21.1928 0.631107 21.0354L21.0857 0.698261C21.4057 0.380028 21.8398 0.201248 22.2925 0.201248C22.7451 0.201248 23.1792 0.380028 23.4993 0.698261C23.8194 1.01649 23.9992 1.4481 23.9992 1.89815C23.9992 2.3482 23.8194 2.77981 23.4993 3.09805L4.24815 22.2353L23.4993 41.3726C23.658 41.53 23.784 41.717 23.8699 41.9229C23.9558 42.1288 24.0001 42.3496 24.0001 42.5725C24.0001 42.7954 23.9558 43.0161 23.8699 43.222C23.784 43.4279 23.658 43.6149 23.4993 43.7724Z" 
          fill="white"/>
      </svg>
    </button>
    <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="45" viewBox="0 0 24 45" fill="none">
         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.565959 0.698218C0.724296 0.540391 0.912395 0.415172 1.11948 0.329734C1.32657 0.244296 1.54857 0.200317 1.77278 0.200317C1.99698 0.200317 2.21899 0.244296 2.42607 0.329734C2.63316 0.415172 2.82126 0.540391 2.9796 0.698218L23.4341 21.0354C23.5929 21.1928 23.7188 21.3798 23.8048 21.5857C23.8907 21.7916 23.9349 22.0124 23.9349 22.2353C23.9349 22.4582 23.8907 22.6789 23.8048 22.8848C23.7188 23.0907 23.5929 23.2777 23.4341 23.4352L2.9796 43.7723C2.65953 44.0906 2.22542 44.2693 1.77278 44.2693C1.32013 44.2693 0.886027 44.0906 0.565959 43.7723C0.245891 43.4541 0.066078 43.0225 0.066078 42.5724C0.066078 42.1224 0.245891 41.6908 0.565959 41.3725L19.8171 22.2353L0.565959 3.098C0.407221 2.94057 0.281279 2.75356 0.195347 2.54766C0.109416 2.34176 0.0651855 2.12103 0.0651855 1.89811C0.0651855 1.67519 0.109416 1.45446 0.195347 1.24856C0.281279 1.04267 0.407221 0.855647 0.565959 0.698218Z" fill="white"/>
        </svg>
    </button>

    
</div>
<div className="flex flex-col justify-center items-center min-h-screen">
    <div className="shop-cards flex flex-col bg-white gap-4 sm:gap-12 py-10 sm:py-20">
        <div className="flex flex-col items-center sm:gap-3 sm:px-48">
            <p className="text-black text-xl sm:text-2xl font-bold">EDITOR’S PICK</p>
            <p className="text-black text-xs sm:text-sm">
                Problems trying to resolve the conflict between
            </p>
        </div>
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-48">
            <div className="w-full h-[350px] sm:min-w-[510px] sm:min-h-[500px] bg-shopcardMan flex  items-end p-2 sm:p-5 bg-cover">
            <div className="bg-white w-40 h-12 flex items-center justify-center text-text-color font-montserrat text-base font-bold">
                    MAN
                </div>
            </div>
            <div className="w-full sm:min-w-[240px] h-[350px] sm:min-h-[500px] bg-shopcardWomen flex items-end  p-2 sm:p-5 bg-cover">
            <div className="bg-white w-40 h-12 flex items-center justify-center text-text-color font-montserrat text-base font-bold">
                    WOMEN
                </div>
            </div>
            <div className="w-full sm:min-w-[240px] sm:min-h-[500px] flex flex-col gap-4">  
                <div className="w-[239px] h-[242px] bg-shopcardAcc flex items-end p-2 sm:p-5 bg-cover">
                <div className="bg-white w-40 h-12 flex items-center justify-center text-text-color font-montserrat text-base font-bold">
                        ACCESSORIES
                    </div>
                </div>
                <div className="w-[239px] h-[242px] bg-shopcardKids flex items-end p-2 sm:p-5 bg-cover">
                  <div className="bg-white w-40 h-12 flex items-center justify-center text-text-color font-montserrat text-base font-bold">
                        KIDS
                    </div>
                </div>
            </div>
        </div>

        </div>
</div>

<div className="product-cards h-[1652px] flex flex-col bg-white gap-12 py-20">
    <div className="flex flex-col items-center gap-3 px-4 sm:px-48 text-center">
        <p className="text-black text-lg whitespace-nowrap">Featured Products</p>
        <p className="text-black text-2xl font-bold whitespace-nowrap">BESTSELLER PRODUCTS</p>
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
