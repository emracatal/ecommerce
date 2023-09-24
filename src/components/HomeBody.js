import React from "react";

export default function HomeHeader() {
  return (
    <>
      <div className="home-header full-width-slider--horizontal bg-herocover2 h-[716px]">
        <div className="home-header-inner p-28 text-white h-[716px] flex flex-col justify-center gap-12 font-bold">
          <p className="text-base">SUMMER 2020</p>
          <p className="text-6xl">NEW COLLECTION</p>
          <p className="text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          <div>
            <button className="rounded bg-green text-xl px-10 py-4">SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className='full-width-slider--horizontal'>
<img src={herocover2} alt="herocover2"></img>

</div>       */
}
