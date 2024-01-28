import React from "react";
import HomeHeader from "./HeaderHome";

export default function OrderConfirm({ selectedAddress, selectedPayment }) {
  return (
    <>
      <HomeHeader />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-2 mobile:flex mobile:flex-col mobile:py-2 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2">
            <h3>Order Confirm</h3>
            {/* selected address */}
            {selectedAddress && (
              <div className="mt-4">
                <h6 className="font-bold">
                  Selected Address: {selectedAddress?.title}
                </h6>
                <p>
                  {selectedAddress?.address +
                    " " +
                    selectedAddress?.neighborhood +
                    " " +
                    selectedAddress?.district +
                    " " +
                    selectedAddress?.city}
                </p>
              </div>
            )}
            {/* selected payment */}
            {selectedPayment && (
              <div className="mt-4">
                <h6 className="font-bold">
                  Selected Payment: {selectedPayment.card_no}
                </h6>
                <p>
                  {selectedPayment?.name_on_card}
                  {selectedPayment?.expire_year +
                    "/" +
                    selectedPayment?.expire_month}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
