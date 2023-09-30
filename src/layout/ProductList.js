import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductListHeader from "../components/ProductListHeader";
import Shopcard from "../components/Shopcard";

export default function ProductList() {
  const [menuOpen, setMenuOpen] = useState(false);
  const blogs = [
    { id: 1, name: "blog1", price: 19.99 },
    { id: 2, name: "blog2", price: 19.99 },
    { id: 3, name: "blog3", price: 39.99 },
    { id: 4, name: "blog4", price: 39.99 },
    { id: 5, name: "blog5", price: 39.99 },
  ];

  return (
    <>
      <ProductListHeader />
      <div className="blog-container flex flex-row flex-wrap gap-7 justify-between max-w-[1440px] pb-12 px-10">
        {blogs.map((blog) => (
          <Shopcard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* filterarea */}
      <div className="flex justify-center max-w-[1440px]">
        <div className="container bg-verylightgray3 flex flex-row justify-between items-center max-w-[1440px] min-h-[98px] px-10 ">
          <h6>Showing all 12 results</h6>
          <h6>Views</h6>
          <h6>Popularity</h6>
        </div>
      </div>
    </>
  );
}
