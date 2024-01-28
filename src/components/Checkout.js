import React, { useEffect, useState } from "react";
import HeaderHome from "./HeaderHome";
import {
  fetchAddresses,
  setNewAddress,
  fetchPayment,
} from "../store/actions/shoppingCartActions";
import { getCityNames } from "turkey-neighbourhoods";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutPayment from "./CheckoutPayment";

export default function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const shoppingCardList = useSelector((store) => store.shoppingCart.cart);
  const cities = getCityNames();
  const addresses = useSelector((store) => store.shoppingCart.address);
  const paymentInfo = useSelector((store) => store.shoppingCart.payment);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  function maskCard(num) {
    const maskedPart = "*".repeat(num.length - 8);
    return `${num.substr(0, 4)}${maskedPart}${num.substr(-4)}`;
  }

  const subtotal = shoppingCardList.reduce(
    (acc, p) => acc + p.count * p.product.price,
    0
  );
  const discount = subtotal >= 150 ? -30 : 0;

  useEffect(() => {
    dispatch(fetchAddresses());
    console.log(addresses);
  }, []);

  useEffect(() => {
    dispatch(fetchPayment());
    console.log(paymentInfo);
  }, []);

  const isCheckoutDisabled = !selectedAddress || !selectedPayment;
  const handleCheckout = () => {
    if (!isCheckoutDisabled) {
      // Checkout işlemleri
      history.push("/orderConfirm"); // Geçiş yapılacak sayfa
    }
  };

  return (
    <>
      <HeaderHome />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-2 mobile:flex mobile:flex-col mobile:py-2 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2">
            <h3>Checkout</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="container flex flex-row items-start max-w-[1050px] gap-5 mobile:flex-col ">
          <div className="w-[58%] mobile:w-full shadow-2xl ">
            {/* address */}
            <CheckoutAddress
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
            />

            {/* payment */}
            <CheckoutPayment
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
            />
          </div>

          {/* oerder summary */}
          <div className="w-[40%] mobile:w-full shadow-2xl">
            {shoppingCardList.length > 0 && (
              <div id="summary" class=" px-2  mobile:w-full ">
                <h1 class="bg-verylightgray2 rounded-md font-semibold text-xl py-2">
                  Order Summary
                </h1>
                <div class="">
                  <div class="flex justify-between py-2 text-sm ">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} TL</span>
                  </div>
                </div>
                <div class="">
                  <div class="flex justify-between py-2 text-sm ">
                    <span>Shipping</span>
                    <span>30 TL</span>
                  </div>
                </div>

                <div class="">
                  <div class="flex justify-between py-2 text-sm ">
                    <span>Discount - Free Shipping over 150 TL </span>
                    <span>{discount} TL</span>
                  </div>
                </div>

                {subtotal < 150 && (
                  <div class="">
                    <div class="flex justify-between text-xs text-danger">
                      <span>
                        Free delivery if you add {(150 - subtotal).toFixed(2)}{" "}
                        TL to your shopping cart
                      </span>
                    </div>
                  </div>
                )}

                <div class="border-t mt-4">
                  <div class="flex font-semibold justify-between py-2 text-sm ">
                    <span>Total cost</span>
                    <span>{(subtotal + 30 + discount).toFixed(2)} TL</span>
                  </div>

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
                        Selected Payment: {maskCard(selectedPayment.card_no)}
                      </h6>
                      <p>
                        {selectedPayment?.name_on_card}
                        {selectedPayment?.expire_year +
                          "/" +
                          selectedPayment?.expire_month}
                      </p>
                    </div>
                  )}

                  <div className="mt-2">
                    <button
                      onClick={handleCheckout}
                      className={`flex items-center justify-center rounded-md border ${
                        isCheckoutDisabled
                          ? "bg-zinc-400 text-white"
                          : "border-transparent bg-turku text-white"
                      } px-2 py-2 text-sm font-bold shadow-sm w-full`}
                      disabled={isCheckoutDisabled}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
