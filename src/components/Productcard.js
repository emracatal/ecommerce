import React from "react";
import productcover1 from "../assets/productcover1.png";

export default function Productcard() {
  return (
    <>
        <div className="card max-w-[239px]">
          <img src={productcover1} className=""></img>
          <div className="cardbody flex flex-auto flex-col items-center gap-2 py-6">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <div className="price flex flex-row gap-3">
              <h5>$16.48</h5>
              <h5>$6.48</h5>
            </div>
            <h5></h5>
            <div className="colors">COLORS HERE</div>
          </div>
        </div>
    </>
  );
}
