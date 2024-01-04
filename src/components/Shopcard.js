import React from "react";
import productcover2 from "../assets/productcover2.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setCategories } from "../store/actions/globalActions";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Shopcard({ onChange }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.global.categories);

  const handleCategoryClick = (categoryId) => {
    onChange(categoryId);
  };

  return (
    <>
      {categories
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((category, i) => (
          <Link
            to={`/shopping/${
              category.gender === "k" ? "kadın" : "erkek"
            }/${category.title.toLowerCase()}`}
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            style={{ backgroundImage: `url(${category.img})` }}
            alt="x"
            className="card max-w-[205px] min-h-[223px] w-[100%] items-center flex justify-center flex-col text-white bg-cover bg-center hover:scale-105"
          >
            <h5 className="font-bold text-center">
              {category.gender === "k" ? "KADIN" : "ERKEK"}
            </h5>
            <h5 className="text-center">{category.title}</h5>
          </Link>
        ))}
    </>
  );
}
