import React from "react";
import singleproduct5 from "../assets/singleproduct5.png";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Productcard3() {
  return (
    <>
      <Link to="/ProductPage">
        <div className="card max-w-[239px]">
          <img src={singleproduct5} className=""></img>
          <div className="cardbody flex flex-auto flex-col items-center gap-2 py-6">
            <h5 className="font-bold">Graphic Design</h5>
            <p>English Department</p>
            <div className="price flex flex-row gap-3">
              <h5 className="text-lightgray">$16.48</h5>
              <h5 className="text-secondarycolor1 font-bold">$6.48</h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
