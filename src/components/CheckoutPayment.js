import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchPayment,
  setNewPayment,
} from "../store/actions/shoppingCartActions";
import cardfinans from "../assets/cardfinans.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import maximum from "../assets/maximum.png";

export default function CheckoutPayment({
  selectedPayment,
  setSelectedPayment,
}) {
  const paymentInfo = useSelector((store) => store.shoppingCart.payment);
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  function maskCard(num) {
    const maskedPart = "*".repeat(num.length - 8);
    return `${num.substr(0, 4)}${maskedPart}${num.substr(-4)}`;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isLoading },
  } = useForm({
    defaultValues: {
      //title: "",
      name_on_card: "",
      card_no: "",
      expire_month: "",
      expire_year: "",
    },
    mode: "onTouched",
  });

  const onFormSubmit = async (formData) => {
    try {
      console.log(formData);
      const postData = {
        //title: formData.title,
        name_on_card: formData.name_on_card,
        card_no: formData.card_no,
        expire_month: formData.expire_month,
        expire_year: formData.expire_year,
      };
      console.log(formData);
      console.log(postData);

      await dispatch(setNewPayment(postData));

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(fetchPayment());
    } catch (error) {
      console.error("Error adding new payment:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center gap-1 mobile:w-[80%] mobile:justify-center">
        <div>
          <h1 class="font-semibold text-xl py-2">1-Select payment</h1>
        </div>

        <div class="flex flex-row flex-wrap justify-between gap-1">
          {paymentInfo && paymentInfo.length > 0 ? (
            paymentInfo.map((card, index) => (
              <div
                key={index}
                className="w-[40%] flex flex-row items-center border border-lightgray rounded my-2 p-2"
              >
                <input
                  id={`payment-radio-${index}`}
                  type="radio"
                  value=""
                  name="payment-radio"
                  className="w-4 h-4 self-baseline mt-3 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={card === selectedPayment}
                  onChange={() => setSelectedPayment(card)}
                />
                <label
                  htmlFor={`payment-radio-${index}`}
                  className="w-full py-1 ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  <div className="flex justify-between items-center">
                    {card.card_no.startsWith("1111") ? (
                      <img
                        src={cardfinans}
                        className="object-cover w-14"
                        alt="cardfinans Card"
                      />
                    ) : (
                      <img
                        src={maximum}
                        className="object-cover w-14"
                        alt="maximum"
                      />
                    )}
                    {card.card_no.startsWith("1111") ? (
                      <img
                        src={visa}
                        className="object-cover w-12"
                        alt="Visa Card"
                      />
                    ) : (
                      <img
                        src={mastercard}
                        className="object-cover w-12"
                        alt="Mastercard"
                      />
                    )}
                  </div>

                  <div className="flex justify-between text-right">
                    <p>{card?.name_on_card}</p>
                    <p>{maskCard(card?.card_no)}</p>
                    <p> {card?.expire_year + "/" + card?.expire_month}</p>
                  </div>
                </label>
              </div>
            ))
          ) : (
            <p>No saved cards available.</p>
          )}
        </div>

        <button
          onClick={() => setVisible(!isVisible)}
          className="border border-lightgray text-gray-600 shadow-lg p-2 rounded-md cursor-pointer text-center"
        >
          <h3> + </h3>
          <h5> Add a new card </h5>
        </button>

        <div
          id="myDIV"
          className={`${
            isVisible
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
              {/* <div class="flex flex-wrap -mx-3 mb-1">
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
              </div> */}

              {/* name on card */}
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full px-3 mb-1 md:mb-1">
                  <label
                    class="block tracking-wide text-gray-700 text-xs font-bold mb-1"
                    for="grid-name_on_card"
                  >
                    Name on card
                  </label>
                  <input
                    {...register("name_on_card", {
                      required: "Required",
                      minLength: {
                        value: 3,
                        message: "At least 3 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-name_on_card"
                    type="text"
                    placeholder="Jane Doe"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.name_on_card?.message}
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
                    {...register("card_no", {
                      required: "Required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-card-1"
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.card_no?.message}
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
                    placeholder="20YY"
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
                        value: /^(0[1-9]|1[0-2])$/,
                        message: "Invalid month format",
                      },
                    })}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-expire_month"
                    type="text"
                    placeholder="MM"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.expire_month?.message}
                  </p>
                </div>
              </div>

              <div class="flex w-full justify-center ">
                <button
                  className={`w-full h-12 rounded-lg border mt-5 ${
                    !isValid ? "bg-zinc-400 text-white" : "bg-turku text-white"
                  } ${
                    isLoading ? "bg-zinc-400 text-white" : "bg-turku text-white"
                  }`}
                  disabled={!isValid || isLoading}
                  type="submit"
                >
                  Submit New Card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
