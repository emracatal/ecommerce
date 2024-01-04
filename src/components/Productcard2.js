import React from "react";
import productlist1 from "../assets/productlist1.png";
import noprodfound from "../assets/noprodfound.png";
import loading from "../assets/loading.jpg";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Productcard2({ products }) {
  return (
    <>
      {/* {!products ? (
        <div>
          <img src={noprodfound} alt="No products found" />
        </div>
      ) : ( */}
      <>
        {products?.map((product, i) => (
          <Link
            key={i}
            to={`/product/${product.category_id}/${product.id}/${product.name
              .toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <div className="card max-w-[239px] min-h-[526px] shadow-lg hover:bg-verylightgray2 hover:scale-105">
              <img
                src={product.images[0].url}
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
      </>
      {/* )} */}
    </>
  );
}
