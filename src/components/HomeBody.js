import React, { useEffect, useState } from "react";

import Productcard from "../trash/Productcard";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import containerfluid from "../assets/containerfluid.png";

import Blogcard from "./Blogcard";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axiosInstance from "../api/api";
import axiosInstanceLocal from "../api/apiLocal";

export default function HomeBody() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestSellerProducts = async () => {
      try {
        const response = await axiosInstanceLocal.get("/products/bestseller8");
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchBestSellerProducts();
  }, []);
  const blogs = [
    { id: 1, name: "blog1", price: 19.99 },
    { id: 2, name: "blog2", price: 19.99 },
    { id: 3, name: "blog3", price: 39.99 },
  ];
  return (
    <>
      {/* mavi foto slider */}
      <Carousel />

      {/* editorspick */}
      <div className="shop-cards">
        <div className="container flex flex-col gap-12 items-center max-w-[1440px] mx-auto py-20">
          <div className="text-area text-center">
            <h3 className="font-bold">EDITOR'S PICK</h3>
            <p>Problems trying to resolve the conflict between</p>
          </div>
          <div className="max-w-[1050px] shop-cards-images flex flex-row justify-center flex-wrap gap-7">
            <div className="men bg-shopcardMan w-[509px] h-[500px]">
              <h5 className="bg-white font-bold w-[30%] text-center ">MEN</h5>
            </div>
            <div className="men bg-shopcardWomen w-[239px] h-[500px]">
              <h5 className="bg-white font-bold w-[30%] text-center">MEN</h5>
            </div>

            <div className="flex flex-col gap-4">
              <div className="accessories bg-shopcardAcc w-[239px] h-[242px]">
                <h5 className="bg-white font-bold w-[30%] text-center">MEN</h5>
              </div>
              <div className="kids bg-shopcardKids w-[239px] h-[242px]">
                <h5 className="bg-white font-bold w-[30%] text-center">MEN</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* productcards */}
      <div className="bestseller pb-20 max-w-[1440px] mx-auto">
        <div className=" flex flex-col gap-12 items-center max-w-[1440px] py-20">
          <div className="text-area">
            <div className="text-area text-center">
              <h4>Featured Products</h4>
              <h3 className="font-bold">BESTSELLER PRODUCTS</h3>
              <p>Problems trying to resolve the conflict between</p>
            </div>
          </div>
        </div>
        <div className="bestseller-products-container flex items-center justify-center max-w-[1440px]">
          <div className="flex flex-row flex-wrap max-w-[1050px] gap-7 justify-center items-canter">
            {products?.map((product, i) => (
              <Link
                key={i}
                to={`/product/${product.category_id}/${
                  product.id
                }/${product.name.toLowerCase().replaceAll(" ", "-")}`}
              >
                <div className="card max-w-[239px] min-h-[526px] shadow-lg hover:bg-verylightgray2 hover:scale-105">
                  <img
                    src={product.image}
                    className="shadow-sm"
                    alt={product.name}
                  />
                  <div className="cardbody flex flex-auto flex-col items-center gap-2 py-6">
                    <h5 className="font-bold">{product.name}</h5>
                    <p className="text-center line-clamp-2">
                      {product.description}
                    </p>
                    <div className="price flex flex-row gap-3">
                      <h5 className="text-lightgray">
                        {[...Array(5)].map((star, index) => {
                          const ratingValue = index + 1;
                          return (
                            <span key={index}>
                              {product.rating >= ratingValue ? (
                                <i className="fa-solid fa-star text-yellow-500"></i>
                              ) : (
                                <i className="fa-regular fa-star text-yellow-500"></i>
                              )}
                            </span>
                          );
                        })}
                      </h5>
                      <h5 className="text-secondarycolor1 font-bold">
                        {product.price} TL
                      </h5>
                    </div>
                    <div className="colors flex gap-1 ">
                      <i className="fa-solid fa-circle text-turku"></i>
                      <i className="fa-solid fa-circle text-secondarycolor1"></i>
                      <i className="fa-solid fa-circle text-alertcolor"></i>
                      <i className="fa-solid fa-circle text-darkblue"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* yeşil foto slider */}
      <Carousel2 />

      {/* kırmızılı resim*/}
      <div className="min-h-[682px] flex ">
        <div className="container flex flex-row justify-center gap-7 px-10 max-w-[1440px] mx-auto tablet:flex-col tablet:justify-center tablet:items-center tablet:py-32">
          <div className="tablet:hidden">
            <img
              src={containerfluid}
              alt="containerfluid"
              className="max-w-[704px] min-h-[682px] object-cover"
            ></img>
          </div>
          <div className="container flex flex-col justify-center gap-7 max-w-[573px] min-h-[326px] tablet:items-center tablet:text-center tablet:justify-center">
            <h5 className="font-bold">SUMMER 2020</h5>
            <h1 className="font-bold">Part of the Neural Universe</h1>
            <h4 className="">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div>
              <button className="rounded bg-green text-lg font-bold px-5 py-2 text-white">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="hidden tablet:flex w-full">
            <img
              src={containerfluid}
              alt="containerfluid"
              className="max-w-[704px] min-h-[682px] object-cover tablet:w-full"
            ></img>
          </div>
        </div>
      </div>

      {/* productcards */}
      <div className="blog  ">
        <div className="container flex flex-col gap-12 items-center max-w-[1440px] mx-auto py-20">
          <div className="text-area">
            <div className="text-area text-center">
              <h6 className="text-turku">Practice Advice</h6>
              <h2 className="font-bold">Featured Posts</h2>
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>
        <div className="blog-container flex items-center justify-center max-w-[1440px] mx-auto">
          <div className="flex flex-row flex-wrap max-w-[1440px] gap-2 justify-center items-center">
            {blogs.map((blog, i) => (
              <Blogcard key={i} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
