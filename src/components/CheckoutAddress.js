import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchAddresses,
  setNewAddress,
} from "../store/actions/shoppingCartActions";
import { getCityNames } from "turkey-neighbourhoods";

export default function CheckoutAddress({
  selectedAddress,
  setSelectedAddress,
}) {
  const dispatch = useDispatch();
  const cities = getCityNames();
  const addresses = useSelector((store) => store.shoppingCart.address);
  const [isVisible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isLoading },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onTouched",
  });

  const onFormSubmit = async (formData) => {
    try {
      console.log(formData);
      const postData = {
        title: formData.title,
        name: formData.name,
        surname: formData.surname,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        district: formData.district,
        neighborhood: formData.neighborhood,
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
      <div className="flex flex-col justify-center  gap-1 mobile:w-[80%] mobile:justify-center">
        <div>
          <h1 class="font-semibold text-xl py-2">1-Select delivery address</h1>
        </div>

        <div class="flex flex-row flex-wrap justify-between gap-1">
          {addresses && addresses.length > 0 ? (
            addresses.map((address, index) => (
              <div
                key={index}
                className="w-[40%] flex flex-row items-center border border-lightgray rounded my-2 p-2"
              >
                <input
                  id={`address-radio-${index}`}
                  type="radio"
                  value=""
                  name="address-radio"
                  className="w-4 h-4 self-baseline mt-2 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={address === selectedAddress}
                  onChange={() => setSelectedAddress(address)}
                />
                <label
                  htmlFor={`address-radio-${index}`}
                  className="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <h6 className="font-bold">{address?.title}</h6>
                  <p>
                    {address?.address +
                      " " +
                      address?.neighborhood +
                      " " +
                      address?.district +
                      " " +
                      address?.city}
                  </p>
                </label>
              </div>
            ))
          ) : (
            <p>No addresses available.</p>
          )}
        </div>

        <button
          onClick={() => setVisible(!isVisible)}
          className="border border-lightgray text-gray-600 shadow-lg p-2 rounded-md cursor-pointer text-center"
        >
          <h3> + </h3>
          <h5> Add a new address </h5>
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
              {/* address title */}
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-800 text-sm font-bold mb-1"
                    for="grid-address-1"
                  >
                    Address Title
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
                    id="grid-address-1"
                    type="text"
                    placeholder="My Home "
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.title?.message}
                  </p>
                </div>
              </div>

              {/* name surname */}

              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full md:w-1/2 px-3 mb-1 md:mb-1">
                  <label
                    class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    {...register("name", {
                      required: "Required",
                      minLength: {
                        value: 3,
                        message: "At least 3 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.name?.message}
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
                    for="grid-surname"
                  >
                    Surname
                  </label>
                  <input
                    {...register("surname", {
                      required: "Required",
                      minLength: {
                        value: 3,
                        message: "At least 3 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-surname"
                    type="text"
                    placeholder="Doe"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.surname?.message}
                  </p>
                </div>
              </div>
              {/* phone */}
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-800 text-xs font-bold mb-1"
                    for="grid-phone"
                  >
                    Phone
                  </label>

                  <input
                    {...register("phone", {
                      required: "Required",
                      minLength: {
                        value: 3,
                        message: "At least 3 characters",
                      },
                      pattern: {
                        value: /^[+0-9]+$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-phone"
                    type="tel"
                    placeholder="+905554443322"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.phone?.message}
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full px-3">
                  <label
                    class="block tracking-wide text-gray-800 text-xs font-bold mb-1"
                    for="grid-address-1"
                  >
                    Address
                  </label>
                  <input
                    {...register("address", {
                      required: "Required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-lightgray  rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-address-1"
                    type="text"
                    placeholder="İnönü Cad.Hükümet Konağı Kat:2"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.address?.message}
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full md:w-1/3 px-3 mb-1 md:mb-1">
                  <label
                    //value={selectedCity}
                    class="block tracking-wide text-gray-700 text-xs font-bold mb-1"
                    for="grid-city"
                  >
                    City
                  </label>
                  <div class="relative">
                    <select
                      {...register("city")}
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                    >
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-1 md:mb-1">
                  <label
                    class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
                    for="grid-district"
                  >
                    District
                  </label>
                  <input
                    {...register("district", {
                      required: "Required",
                      minLength: {
                        value: 2,
                        message: "At least 2 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-district"
                    type="text"
                    placeholder="Aladağ"
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.district?.message}
                  </p>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-1 md:mb-1">
                  <label
                    class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
                    for="grid-neighborhood"
                  >
                    Neighborhood
                  </label>
                  <input
                    {...register("neighborhood", {
                      required: "Required",
                      minLength: {
                        value: 2,
                        message: "At least 2 characters",
                      },
                    })}
                    class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-neighborhood"
                    type="text"
                    placeholder="Mansurlu Mah. "
                  />
                  <p className=" text-red-500 text-xs italic">
                    {errors.neighborhood?.message}
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
                  Submit New Address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
