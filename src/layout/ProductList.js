import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import Shopcard from "../components/Shopcard";
import Productcard2 from "../components/Productcard2";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../store/actions/productActions";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import InfiniteScroll from "react-infinite-scroll-component";
import axiosInstance from "../api/api";

export default function ProductList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.global.categories);
  const products = useSelector((store) => store.product.productList);
  const [offset, setOffset] = useState(0);
  const limit = 24;
  const [hasMore, setHasMore] = useState(true);
  const totalProductCount = useSelector(
    (store) => store.product.totalProductCount
  );
  //console.log(products);

  useEffect(() => {
    dispatch(fetchProducts({ limit, offset }));
    setOffset(offset + limit);
  }, []);

  const [filters, setFilters] = useState({
    category: "",
    filter: "",
    sort: "",
  });

  const handleCategoryChange = (category) => {
    setFilters({
      category: category,
      filter: "",
      sort: "",
    });
    dispatch(
      fetchProducts({ category, filter: "", sort: "", limit, offset: 0 })
    );
    setOffset(24);
  };

  const handlefilterChange = (event) => {
    setFilters({
      ...filters,
      filter: event.target.value,
    });
  };

  const handlesortChange = (event) => {
    setFilters({
      ...filters,
      sort: event.target.value,
    });
  };

  const handleFilterClick = () => {
    const { category, filter, sort } = filters;
    dispatch(fetchProducts({ category, filter, sort, limit, offset: 0 }));
    setOffset(24);
  };

  const fetchMoreProducts = () => {
    const apipath = `/products?filter=${filters.filter}&sort=${filters.sort}&limit=${limit}&offset=${offset}&category=${filters.category}`;
    axiosInstance
      .get(apipath)
      .then((response) => {
        //console.log("INFINITE RESPONSE: ", response);
        dispatch(setProducts(response.data.products));
        setOffset(offset + limit);
        if (totalProductCount && products?.length === totalProductCount) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching more data:", error);
      });
  };

  return (
    <>
      <HeaderHome onCategoryChange={handleCategoryChange} />
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
              : "Showing all " + `${products?.length}` + " results"}
          </h6>
          <div className="flex flex-row gap-3 items-center justify-center">
            <h6>Views: </h6>
            <i className="fa-solid fa-grip border-solid border-2 border-verylightgray2 p-2"></i>
            <i className="fa-solid fa-list border-solid border-2 border-verylightgray2  p-2"></i>
          </div>

          <div className="flex gap-2 items-center">
            {/* <!-- Search input area  --> */}
            <input
              value={filters.filter}
              onChange={handlefilterChange}
              type="text"
              placeholder="Search..."
              className="text-sm border-solid border-2 border-verylightgray2  flex gap-3 items-center p-1.5"
            ></input>
            {/* <!-- Dropdown menu --> */}
            <div className="sort-selection text-sm border-solid border-2 border-verylightgray2 p-1.5 ">
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  value={filters.sort}
                  onChange={handlesortChange}
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
              <Link
                to={`/shopping/${
                  categories.find((cat) => cat.id === filters.category)
                    ?.gender === "k"
                    ? "kadın"
                    : "erkek"
                }/${categories
                  .find((cat) => cat.id === filters.category)
                  ?.title.toLowerCase()}/filter=${filters.filter}/&sort=${
                  filters.sort
                }`}
              >
                Filter
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* productcards */}
      <div className="bestseller pb-20 ">
        <div className="container flex flex-col items-center justify-center max-w-[1050px] py-12 mx-auto mobile:flex mobile:flex-col mobile:items-center mobile:p-10 mobile:gap-4 ">
          <InfiniteScroll
            dataLength={products ? products.length : 0}
            next={fetchMoreProducts}
            hasMore={hasMore}
            loader={<h4>No product found</h4>}
            endMessage={
              <h5 className="items-center text-center m-10 font-bold">
                Yay! You have seen it all
              </h5>
            }
          >
            <div className="bestseller-products-container flex flex-row flex-wrap gap-7 items-center justify-center max-w-[1050px] ">
              <Productcard2 products={products} />
            </div>
          </InfiniteScroll>
        </div>
      </div>

      {/* clients */}
      <Clients />
      {/* footer */}
      <Footer />
    </>
  );
}
