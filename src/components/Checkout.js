import React, { useEffect, useState } from "react";
import HeaderHome from "./HeaderHome";
import {
  fetchAddresses,
  setNewAddress,
  fetchPayment,
} from "../store/actions/shoppingCartActions";
import { getCityNames } from "turkey-neighbourhoods";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import axiosWithAuth from "../api/axiosWithAuth";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutAddress from "./CheckoutAddress";

export default function Checkout() {
  const dispatch = useDispatch();
  const shoppingCardList = useSelector((store) => store.shoppingCart.cart);
  const [isNewAddressVisible, setNewAddressVisible] = useState(false);
  const cities = getCityNames();
  const addresses = useSelector((store) => store.shoppingCart.address);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const paymentInfo = useSelector((store) => store.shoppingCart.payment);

  const subtotal = shoppingCardList.reduce(
    (acc, p) => acc + p.count * p.product.price,
    0
  );
  const discount = subtotal >= 150 ? -30 : 0;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isLoading },
  } = useForm({
    defaultValues: {
      title: "",
      cardname: "",
      card_no: "",
      expire_month: "",
      expire_year: "",
    },
    mode: "onTouched",
  });

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  useEffect(() => {
    dispatch(fetchAddresses());
    console.log(addresses);
  }, []);

  useEffect(() => {
    dispatch(fetchPayment());
    console.log(paymentInfo);
  }, []);

  const onFormSubmit = async (formData) => {
    try {
      console.log(formData);
      const postData = {
        title: formData.title,
        cardname: formData.cardname,
        card_no: formData.card_no,
        expire_month: formData.expire_month,
        expire_year: formData.expire_year,
      };
      console.log(formData);
      console.log(postData);

      await dispatch(setNewAddress(postData));

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(fetchAddresses());
    } catch (error) {
      console.error("Error adding new address:", error);
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
        <div className="container flex items-start max-w-[1050px] gap-5 mobile:flex-wrap">
          {/* address */}
          <CheckoutAddress />

          {/* payment */}
          <div className="flex flex-col justify-center  w-[50%] gap-1 mobile:w-[80%] mobile:justify-center">
            <div>
              <h1 class="font-semibold text-xl py-1">1-Select payment</h1>
            </div>

            <div class="flex flex-col justify-start">
              {paymentInfo && paymentInfo.length > 0 ? (
                paymentInfo.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center border border-lightgray rounded my-2 p-2"
                  >
                    <input
                      id={`bordered-radio-${index}`}
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`bordered-radio-${index}`}
                      className="w-full py-1 ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                    >
                      <h6 className="font-bold">{card?.name_on_card}</h6>
                      <p>
                        {card?.card_no +
                          " " +
                          paymentInfo?.expire_year +
                          " " +
                          paymentInfo?.expire_month +
                          " " +
                          paymentInfo?.city}
                      </p>
                    </label>
                  </div>
                ))
              ) : (
                <p>No saved cards available.</p>
              )}
            </div>

            <button
              onClick={() => setNewAddressVisible(!isNewAddressVisible)}
              className="border border-lightgray text-gray-600 shadow-lg p-2 rounded-md cursor-pointer text-center"
            >
              <h3> + </h3>
              <h5> Add a new card </h5>
            </button>

            <div
              id="myDIV"
              className={`${
                isNewAddressVisible
                  ? "container mx-auto pt-1 border-2 border-lightgray rounded-lg"
                  : "hidden"
              } p-4`}
            >
              <div class="mx-auto max-w-xl">
                <form
                  onSubmit={handleSubmit(onFormSubmit)}
                  className="bg-white shadow rounded p-4"
                >
                  {/* card title */}
                  <div class="flex flex-wrap -mx-3 mb-1">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-sm font-bold mb-1"
                        for="grid-card-1"
                      >
                        Card Title
                      </label>
                      <input
                        {...register("title", {
                          required: "Required",
                          minLength: {
                            value: 2,
                            message: "At least 2 characters",
                          },
                        })}
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-card-1"
                        type="text"
                        placeholder="My mastercard "
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.title?.message}
                      </p>
                    </div>
                  </div>

                  {/* name on card */}
                  <div class="flex flex-wrap -mx-3 mb-1">
                    <div class="w-full px-3 mb-1 md:mb-1">
                      <label
                        class="block tracking-wide text-gray-700 text-xs font-bold mb-1"
                        for="grid-cardname"
                      >
                        Name on card
                      </label>
                      <input
                        {...register("cardname", {
                          required: "Required",
                          minLength: {
                            value: 3,
                            message: "At least 3 characters",
                          },
                        })}
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-cardname"
                        type="text"
                        placeholder="Jane Doe"
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.cardname?.message}
                      </p>
                    </div>
                  </div>
                  {/* card no */}
                  <div class="flex flex-wrap -mx-3 mb-1">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-xs font-bold mb-1"
                        for="grid-card-1"
                      >
                        Card no
                      </label>
                      <input
                        {...register("card", {
                          required: "Required",
                          minLength: {
                            value: 10,
                            message: "At least 10 characters",
                          },
                        })}
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-card-1"
                        type="text"
                        placeholder="1234123412341234"
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.card?.message}
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-1">
                    {/* expire_year */}
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-1">
                      <label
                        class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
                        for="grid-expire_year"
                      >
                        Year of expire
                      </label>
                      <input
                        {...register("expire_year", {
                          required: "Required",
                          minLength: {
                            value: 4,
                            message: "At least 4 characters",
                          },
                          pattern: {
                            value: /^(20\d{2})$/,
                            message: "Invalid year format",
                          },
                        })}
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-expire_year"
                        type="text"
                        placeholder="20XX"
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.expire_year?.message}
                      </p>
                    </div>
                    {/* expire_month */}
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-1">
                      <label
                        class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
                        for="grid-expire_month"
                      >
                        Month of expire
                      </label>
                      <input
                        {...register("expire_month", {
                          required: "Required",
                          pattern: {
                            value: /^(0[1-9]|1[0-2])$/, // Ensure it is a two-digit number between 01 and 12
                            message: "Invalid month format",
                          },
                        })}
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-expire_month"
                        type="text"
                        placeholder="01" // You can update the placeholder if needed
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.expire_month?.message}
                      </p>
                    </div>
                  </div>

                  <div class="flex w-full justify-center ">
                    <button
                      className={`w-full h-12 rounded-lg border mt-5 ${
                        !isValid
                          ? "bg-zinc-400 text-white"
                          : "bg-turku text-white"
                      } ${
                        isLoading
                          ? "bg-zinc-400 text-white"
                          : "bg-turku text-white"
                      }`}
                      disabled={!isValid || isLoading}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* oerder summary */}
          {shoppingCardList.length > 0 && (
            <div
              id="summary"
              class="w-1/4 px-2 py-2 border border-solid border-turku rounded-sm mobile:w-full "
            >
              <h1 class="font-semibold text-xl border-b py-2">Order Summary</h1>
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
                      Free delivery if you add {(150 - subtotal).toFixed(2)} TL
                      to your shopping cart
                    </span>
                  </div>
                </div>
              )}

              <div class="border-t mt-4">
                <div class="flex font-semibold justify-between py-2 text-sm ">
                  <span>Total cost</span>
                  <span>{(subtotal + 30 + discount).toFixed(2)} TL</span>
                </div>
                <div className="mt-2">
                  <Link
                    to="/?"
                    className="flex items-center justify-center rounded-md border border-transparent bg-turku px-2 py-2 text-sm font-bold text-white shadow-sm"
                  >
                    Checkout (Link yok)
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
