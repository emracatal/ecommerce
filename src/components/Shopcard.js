import React from "react";
import productcover2 from "../assets/productcover2.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/globalActions";
import { useEffect } from "react";

export default function Shopcard() {
  const categories = useSelector((store) => store.global.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    categories.length == 0 && dispatch(fetchCategories());
  }, []);
  console.log("categories",categories);
  return (
    <>
      <div className="card max-w-[205px] min-h-[223px] bg-cardcover1 w-[100%] items-center flex justify-center flex-col text-white">
        <h5 className="font-bold">{categories}</h5>
        <h5 className="">5 Items</h5>
      </div>
    </>
  );
}
