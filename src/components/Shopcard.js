import React from "react";
import productcover2 from "../assets/productcover2.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setCategories } from "../store/actions/globalActions";
import { useEffect } from "react";

export default function Shopcard() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.global.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {categories
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((category) => (
          <div
            style={{ backgroundImage: `url(${category.img})` }}
            alt="x"
            className="card max-w-[205px] min-h-[223px] w-[100%] items-center flex justify-center flex-col text-white bg-cover bg-center"
          >
            <a href={`/shopping/${category.gender}/${category.code}`}>
              <h5 className="font-bold text-center">
                {category.gender === "k" ? "KADIN" : "ERKEK"}
              </h5>
              <h5 className="text-center">{category.title}</h5>
            </a>
          </div>
        ))}
    </>
  );
}
