import React from "react";
import HomeHeader from "./HeaderHome";

export default function OrderConfirm() {
  return (
    <>
      <HomeHeader />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-2 mobile:flex mobile:flex-col mobile:py-2 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2">
            <h3>Order Confirm</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-2 mobile:flex mobile:flex-col mobile:py-2 mobile:gap-7 ">
          <h5>Siparişiniz başarıyla tamamlandı</h5>
        </div>
      </div>
    </>
  );
}
