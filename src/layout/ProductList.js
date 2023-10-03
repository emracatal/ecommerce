import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductListHeader from "../components/ProductListHeader";
import Shopcard from "../components/Shopcard";
import Productcard2 from "../components/Productcard2";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

export default function ProductList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shops = [
    { id: 1, name: "shopcard1", price: 19.99 },
    { id: 2, name: "shopcard2", price: 19.99 },
    { id: 3, name: "shopcard3", price: 39.99 },
    { id: 4, name: "shopcard4", price: 39.99 },
    { id: 5, name: "shopcard5", price: 39.99 },
  ];

  const products = [
    { id: 1, name: "product1", price: 19.99 },
    { id: 2, name: "product2", price: 19.99 },
    { id: 3, name: "product3", price: 39.99 },
    { id: 4, name: "product4", price: 49.99 },
    { id: 5, name: "product5", price: 19.99 },
    { id: 6, name: "product6", price: 19.99 },
    { id: 7, name: "product7", price: 19.99 },
    { id: 8, name: "product8", price: 19.99 },
    { id: 9, name: "product9", price: 19.99 },
    { id: 10, name: "product10", price: 19.99 },
    { id: 11, name: "product9", price: 19.99 },
    { id: 12, name: "product10", price: 19.99 },
  ];

  return (
    <>
      <ProductListHeader />
      {/* productlist shop başlıklı alan */}
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-10">
          <div className="text-darkblue font-bold flex gap-2 ">
            <h3>Shop</h3>
          </div>
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i class="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="">Shop</h6>
          </div>
        </div>
      </div>

      {/* productlist cloth yazılı 5 fotolu alan */}
      <div className="shopcard-container flex flex-row flex-wrap gap-1 justify-center max-w-[1050px] pb-12 mx-auto">
        {shops.map((shopcard) => (
          <Shopcard key={shopcard.id} shopcard={shopcard} />
        ))}
      </div>

      {/* filterarea */}
      <div className="flex justify-center bg-verylightgray3">
        <div className="container  flex flex-row justify-between items-center max-w-[1050px] min-h-[98px] px-3 ">
          <h6>Showing all 12 results</h6>
          <div className="flex flex-row gap-3 items-center justify-center">
            <h6>Views: </h6>
            <i class="fa-solid fa-grip border-solid border-2 border-verylightgray2 p-2"></i>
            <i class="fa-solid fa-list border-solid border-2 border-verylightgray2  p-2"></i>
          </div>
          <div className="flex gap-2">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-sm border-solid border-2 border-verylightgray2  flex gap-3 items-center px-5"
              type="button"
            >
              Popularity
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button className="text-white text-sm bg-turku p-3 border-solid border-2 border-verylightgray2 px-5">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* productcards */}
      <div className="bestseller pb-20 ">
        <div className="container flex flex-col items-center justify-center max-w-[1050px] py-12 mx-auto">
          <div className="bestseller-products-container flex flex-row flex-wrap gap-7 items-center justify-center max-w-[1050px] ">
            {products.map((product) => (
              <Productcard2 key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* pagination */}
      <Pagination />

      {/* clients */}
      <Clients />

      {/* footer */}
      <Footer />
    </>
  );
}
