import React from "react";
import productlist1 from "../assets/productlist1.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Productcard2() {
  return (
    <>
      <Link to="/ProductPage">
        <div className="card max-w-[239px]">
          <img src={productlist1} className=""></img>
          <div className="cardbody flex flex-auto flex-col items-center gap-2 py-6">
            <h5 className="font-bold">Graphic Design</h5>
            <p>English Department</p>
            <div className="price flex flex-row gap-3">
              <h5 className="text-lightgray">$16.48</h5>
              <h5 className="text-secondarycolor1 font-bold">$6.48</h5>
            </div>
            <div className="colors flex gap-1 ">
              <i class="fa-solid fa-circle text-turku"></i>
              <i class="fa-solid fa-circle text-secondarycolor1"></i>
              <i class="fa-solid fa-circle text-alertcolor"></i>
              <i class="fa-solid fa-circle text-darkblue"></i>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
