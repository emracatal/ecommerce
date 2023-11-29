import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import Shopcard from "../components/Shopcard";
import Productcard2 from "../components/Productcard2";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function ProductList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.global.categories);
  const products = useSelector((store) => store.product.productList.products);
  let { gender, category } = useParams();

  const [filters, setFilters] = useState({
    categoryId: "",
    filterText: "",
    sortBy: "",
  });

  const handleCategoryChange = (categoryId) => {
    setFilters({
      categoryId: categoryId,
      filterText: "",
      sortBy: "",
    });
    dispatch(fetchProducts(categoryId, "", ""));
  };

  const handleFilterTextChange = (event) => {
    setFilters({
      ...filters,
      filterText: event.target.value,
    });
  };

  const handleSortByChange = (event) => {
    setFilters({
      ...filters,
      sortBy: event.target.value,
    });
  };

  const handleFilterClick = () => {
    dispatch(
      fetchProducts(filters.categoryId, filters.filterText, filters.sortBy)
    );
  };

  console.log("filters:", filters);
  return (
    <>
      <HeaderHome />
      {/* productlist shop başlıklı alan */}
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-10 mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2 ">
            <h3>Shop</h3>
          </div>
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i className="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="">Shop</h6>
          </div>
        </div>
      </div>
      {/* productlist cloth yazılı 5 fotolu alan */}

      <div className="shopcard-container flex flex-row flex-wrap gap-1 justify-center max-w-[1050px] py-9 mx-auto mobile:flex mobile:flex-col mobile:items-center mobile:p-10 mobile:gap-4 ">
        <Shopcard onChange={handleCategoryChange} />
      </div>
      {/* filterarea */}
      <div className="flex justify-center bg-verylightgray3">
        <div className="container  flex flex-row justify-between items-center max-w-[1050px] min-h-[98px] px-3 mobile:flex mobile:flex-col mobile:gap-6 mobile:p-10">
          <h6>
            {!products
              ? "Loading"
              : "Showing all " + `${products.length}` + " results"}
          </h6>
          <div className="flex flex-row gap-3 items-center justify-center">
            <h6>Views: </h6>
            <i className="fa-solid fa-grip border-solid border-2 border-verylightgray2 p-2"></i>
            <i className="fa-solid fa-list border-solid border-2 border-verylightgray2  p-2"></i>
          </div>

          <div className="flex gap-2 items-center">
            {/* <!-- Dropdown menu categories --> */}
            {/* <div className="sort-selection text-sm border-solid border-2 border-verylightgray2 p-1.5 ">
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  name="sort"
                  id="sort"
                  value={filters.categoryId}
                  onChange={handleCategoryChange}
                  className="sort-selection--style"
                >
                  <option value="">Select category</option>
                  {categories &&
                    categories.map((category, i) => (
                      <option value={category.id} key={i}>
                        {category.gender === "k" ? "Kadın " : "Erkek "}
                        {category.title}
                      </option>
                    ))}
                </select>
              </form>
            </div> */}
            {/* <!-- Search input area  --> */}
            <input
              value={filters.filterText}
              onChange={handleFilterTextChange}
              type="text"
              placeholder="Search..."
              className="text-sm border-solid border-2 border-verylightgray2  flex gap-3 items-center p-1.5"
            ></input>
            {/* <!-- Dropdown menu --> */}
            <div className="sort-selection text-sm border-solid border-2 border-verylightgray2 p-1.5 ">
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  value={filters.sortBy}
                  onChange={handleSortByChange}
                  name="sort"
                  id="sort"
                  className="sort-selection--style"
                >
                  <option value="">Sort by</option>
                  <option value="price:asc">Price(Low to High)</option>
                  <option value="price:desc">Price(High to Low)</option>
                  <option value="rating:asc">Low Rated</option>
                  <option value="rating:desc">Top Rated</option>
                </select>
              </form>
            </div>

            {/* <!-- Filter button --> */}

            <button
              onClick={handleFilterClick}
              className="text-white text-sm bg-turku border-solid border-2 border-verylightgray2 py-1.5 px-3 "
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      {/* productcards */}
      <div className="bestseller pb-20 ">
        <div className="container flex flex-col items-center justify-center max-w-[1050px] py-12 mx-auto mobile:flex mobile:flex-col mobile:items-center mobile:p-10 mobile:gap-4 ">
          <div className="bestseller-products-container flex flex-row flex-wrap gap-7 items-center justify-center max-w-[1050px] ">
            <Productcard2 />
          </div>
        </div>
      </div>
      {/* pagination */}
      {products?.length && <Pagination />}
      {/* clients */}
      <Clients />
      {/* footer */}
      <Footer />
    </>
  );
}
