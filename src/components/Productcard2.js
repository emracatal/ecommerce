import React from "react";
import productlist1 from "../assets/productlist1.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

export default function Productcard2() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (!products?.length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {products.map((product) => (
        <Link to="/ProductPage">
          <div className="card max-w-[239px]">
            <img src={product.images[0].url} className=""></img>
            <div className="cardbody flex flex-auto flex-col items-center gap-2 py-6">
              <h5 className="font-bold">{product.name}</h5>
              <p>{product.description}</p>
              <div className="price flex flex-row gap-3">
                <h5 className="text-lightgray">
                  {product.stock > 0 ? "In Stock" : "Out Of Stock"}
                </h5>
                <h5 className="text-secondarycolor1 font-bold">
                  {product.price}
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
  );
}
