import React, { useEffect, useState } from "react";
import HeaderHome from "./HeaderHome";
import {
  isCityCode,
  isCityCodeLike,
  castCityCode,
  isCityName,
  isCityNameLike,
  castCityName,
  findDistance,
  findClosestCities,
  getCityNames,
  getDistrictsOfEachCity,
} from "turkey-neighbourhoods";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import axiosWithAuth from "../api/axiosWithAuth";

export default function Checkout() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isLoading },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      lastName: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onTouched",
  });

  const onFormSubmit = (formData) => {
    const postData = {
      title: formData.title,
      name: formData.name,
      lastName: formData.lastName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      district: formData.district,
      neighborhood: formData.neighborhood,
    };
    console.log(postData);
    setTimeout(() => {}, 1000);
  };

  const cities = getCityNames();

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosWithAuth().get("/user/address");
        if (response.status !== 200) {
          console.error("Error fetching addresses:", response.statusText);
          return;
        }
        setSavedAddresses(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderHome />
      <div className="flex justify-center bg-darborder-darkblue3 ">
        <div className="container flex justify-between items-center max-w-[1050px] min-h-[48px] mobile:flex mobile:flex-col mobile:py-1 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2 ">
            <h3>Checkout</h3>
          </div>
        </div>
      </div>

      {/* address */}
      <div className="flex justify-center ">
        <div className="container flex items-start max-w-[1050px] gap-5">
          <div className="flex flex-col justify-center  w-[50%] gap-1">
            <div>
              <h1 class="font-semibold text-xl py-1">
                1-Select delivery address
              </h1>
            </div>
            <button
              onClick={() =>
                document.getElementById("myDIV").classList.toggle("hidden")
              }
              className="border border-gray-400 text-gray-600 shadow-lg p-2 rounded-md cursor-pointer text-center"
            >
              <h3> + </h3>
              <h5> Add a new address </h5>
            </button>

            <div
              id="myDIV"
              className="hidden"
              class="container mx-auto pt-1 border-2 border-verylightgray rounded-lg"
            >
              <div class="mx-auto max-w-xl">
                <form
                  onSubmit={handleSubmit(onFormSubmit)}
                  class="bg-white shadow rounded"
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
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-darkblue rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-address-1"
                        type="text"
                        placeholder="My Home "
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.title?.message}
                      </p>
                    </div>
                  </div>

                  {/* firstname lastname */}

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
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-darkblue rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
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
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        {...register("lastName", {
                          required: "Required",
                          minLength: {
                            value: 3,
                            message: "At least 3 characters",
                          },
                        })}
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.lastName?.message}
                      </p>
                    </div>
                  </div>
                  {/* phone */}
                  <div class="flex flex-wrap -mx-3 mb-1">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-sm font-bold mb-1"
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
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-darkblue rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-phone"
                        type="tel"
                        placeholder="+905554443322"
                      />
                      <p className=" text-red-500 text-xs italic">
                        {errors.phone?.message}
                      </p>
                    </div>
                  </div>
                  {/* address */}

                  <div class="flex flex-wrap -mx-3 mb-1">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-sm font-bold mb-1"
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
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-darkblue rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
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
                        !isValid
                          ? "bg-zinc-400 text-white"
                          : "bg-turku text-white"
                      }
                      ${
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

            <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-1"
                class="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default radio
              </label>
            </div>
          </div>

          {/* payment */}
          <div className="flex flex-col justify-center  w-[50%] gap-1 ">
            <div>
              <h1 class="font-semibold text-xl py-1">
                2-Select payment details
              </h1>
            </div>
            <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-1"
                class="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Default radio
              </label>
            </div>
            <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                checked
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-2"
                class="w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Checked district
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
