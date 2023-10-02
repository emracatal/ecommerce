import React from "react";
import ProductListHeader from "./ProductListHeader";
import SingleProduct from "./SingleProduct";
import Productcard2 from "./Productcard2";

export default function ProductPage() {

    const products = [
        { id: 1, name: "product1", price: 19.99 },
        { id: 2, name: "product2", price: 19.99 },
        { id: 3, name: "product3", price: 39.99 },
        { id: 4, name: "product4", price: 49.99 },
        { id: 5, name: "product5", price: 19.99 },
        { id: 6, name: "product6", price: 19.99 },
        { id: 7, name: "product7", price: 19.99 },
        { id: 8, name: "product8", price: 19.99 },
      ];
    
  return (
    <>
      <ProductListHeader />
      <div className="flex justify-center max-w-[1440px]  bg-verylightgray3">
        <div className="container flex justify-start items-center max-w-[1050px] min-h-[92px]">
          <div className="flex items-center gap-3 ">
            <h6 className="font-bold">Home</h6>
            <i class="fa-solid fa-chevron-right gap-3"></i>
            <h6 className="">Shop</h6>
          </div>
        </div>
      </div>

      {/* product slider */}
      <SingleProduct />
      {/* singleproduct product description*/}
      <div className="flex max-w-[1440px] ">
        <div className="max-w-[1051px] min-h-[72px] mx-auto flex flex-row items-center justify-center gap-10">
          <p className="font-bold text-lightgray">Description</p>
          <p className="font-bold text-lightgray">Additional Information</p>
          <div className="flex flex-row gap-1">
            <p className="font-bold text-lightgray"> Reviews</p>
            <p className="text-green font-bold">(0)</p>
          </div>
        </div>
      </div>

{/* bestseller */}

      <div className="bestseller-products-container flex flex-row flex-wrap gap-10 items-center justify-center max-w-[1124px] px-10">
          {products.map((product) => (
            <Productcard2 key={product.id} product={product} />
          ))}
        </div>
    </>
  );
}
