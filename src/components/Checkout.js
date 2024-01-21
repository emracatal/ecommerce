import React from "react";
import HeaderHome from "./HeaderHome";

export default function Checkout() {
  return (
    <>
      <HeaderHome />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container flex justify-between items-center max-w-[1050px] min-h-[48px] mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
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
              <h1 class="font-semibold text-xl py-2">
                1-Select delivery address
              </h1>
            </div>
            <button
              onClick={() =>
                document.getElementById("myDIV").classList.toggle("hidden")
              }
              className="border border-gray-400 text-gray-600 shadow-lg p-3 rounded-md cursor-pointer text-center"
            >
              <h3> + </h3>
              <h5> Add a new address </h5>
            </button>

            <div id="myDIV" className="hidden" class="container mx-auto pt-10">
              <div class="mx-auto max-w-xl">
                <h1 class="font-bold text-gray-900 not-italic text-2xl text-center">
                  A Tailwind CSS Address Grid Form
                </h1>

                <form class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 mt-4">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                      <p class="text-red-500 text-xs italic">
                        Please fill out this field.
                      </p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-sm font-bold mb-2"
                        for="grid-address-1"
                      >
                        Address Line 1
                      </label>
                      <input
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-address-1"
                        type="text"
                        placeholder="1234 Main Street"
                      />
                      <p class="text-xs italic">
                        Please enter your street address.
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-sm font-bold mb-2"
                        for="grid-address-2"
                      >
                        Address Line 2
                      </label>
                      <input
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-address-2"
                        type="text"
                        placeholder="Suite ABC"
                      />
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-city"
                      >
                        City
                      </label>
                      <div class="relative">
                        <input
                          class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="text"
                          placeholder="Los Angeles"
                        />
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
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-state"
                      >
                        State
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>California</option>
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
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-zip"
                      >
                        Zip
                      </label>
                      <input
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="90020"
                      />
                    </div>
                  </div>

                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block tracking-wide text-gray-800 text-sm font-bold mb-2"
                        for="grid-phone"
                      >
                        Phone
                      </label>
                      <input
                        class="appearance-none block w-full bg-g ray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-phone"
                        type="tel"
                        placeholder="+1-123-456-7890"
                      />
                    </div>
                  </div>

                  <div class="mb-6">
                    <label class="flex items-center text-gray-800 text-sm font-bold">
                      <input class="mr-2 leading-tight" type="checkbox" />
                      <span class="text-sm">
                        Receive order status updates via text message
                      </span>
                    </label>
                  </div>

                  <div class="flex justify-between items-center mb-6">
                    <button
                      class="bg-indigo-700 h-12 hover:shadow hover:bg-indigo-500 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Next
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
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Checked state
              </label>
            </div>
          </div>

          {/* payment */}
          <div className="flex flex-col justify-center  w-[50%] gap-1 ">
            <div>
              <h1 class="font-semibold text-xl py-2">
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
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Checked state
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
