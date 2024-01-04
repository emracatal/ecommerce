import React, { useEffect, useState } from "react";
import HeaderHome from "./HeaderHome";
import SingleProduct from "../trash/SingleProduct";
import Productcard3 from "./Productcard3";
import singleproduct3 from "../assets/singleproduct3.png";
import Clients from "./Clients";
import Footer from "./Footer";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Carousel3 from "./Carousel3";
import axiosInstance from "../api/api";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .get(`/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, []);

  return (
    <>
      <HeaderHome />
      <div className="flex justify-center  bg-verylightgray3">
        <div className="container flex justify-start items-center max-w-[1050px] mx-auto min-h-[92px] mobile:flex mobile:justify-center mobile:items-center">
          <div className="flex items-center gap-3 ">
            <div>
              <button
                className="flex justify-center sm:justify-start gap-[5px] sm:w-[1050px] m-auto text-black font-bold text-lg items-center pt-6"
                onClick={() => history.goBack()}
              >
                <i className="fa-solid fa-chevron-left fa-sm"></i>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* product slider */}
      <div className="single-product bg-verylightgray3">
        <div className="container mx-auto max-w-[1050px] min-h-[450px] flex flex-row item-center gap-7 mobile:flex-col mobile:px-10">
          {product && <Carousel3 image={product.images[0].url} />}
          <div className="right flex max-w-[510px] min-h[450px]">
            <div className="cardbody flex flex-col items-start gap-5">
              <h4 className="font-bold">{product?.name}</h4>
              <div className="stars flex gap-1 ">
                <h5 className="text-lightgray">
                  {product &&
                    [...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <span key={index}>
                          {product.rating >= ratingValue ? (
                            <i className="fa-solid fa-star text-yellow-500"></i>
                          ) : (
                            <i className="fa-regular fa-star text-yellow-500"></i>
                          )}
                        </span>
                      );
                    })}
                </h5>
                <h6>10 reviews</h6>
              </div>
              <h3 className="font-bold">{product?.price} TL</h3>
              <div className="price flex flex-row gap-3">
                <h6 className="text-lightgray">Availibility :</h6>
                <h6 className="text-turku font-bold">
                  {product?.stock > 0 ? "In Stock" : "Not In Stock"}
                </h6>
              </div>
              <p className="">{product?.description}</p>
              <hr className="text-verylightgray max-w-[445px]"></hr>
              <div className="colors flex gap-1 ">
                <i className="fa-solid fa-circle text-turku"></i>
                <i className="fa-solid fa-circle text-secondarycolor1"></i>
                <i className="fa-solid fa-circle text-alertcolor"></i>
                <i className="fa-solid fa-circle text-darkblue"></i>
              </div>
              <div className="flex gap-3 pt-10">
                <button className="rounded bg-turku text-sm text-white font-bold px-5 py-2 ">
                  Select Options
                </button>
                <i className="fa-regular fa-heart border-solid border-2 border-verylightgray2 p-2 rounded-full"></i>
                <i className="fa-solid fa-cart-shopping border-solid border-2 round border-verylightgray2 p-2 rounded-full"></i>
                <i className="fa-regular fa-eye border-solid border-2 border-verylightgray2 p-2 rounded-full"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* singleproduct product description*/}
      <div className="flex ">
        <div className="container max-w-[1050px] mx-auto min-h-[72px] flex flex-row items-center justify-center gap-10 mobile:px-10 ">
          <p className="font-bold text-lightgray">Description</p>
          <p className="font-bold text-lightgray">Additional Information</p>
          <div className="flex flex-row gap-1">
            <p className="font-bold text-lightgray"> Reviews</p>
            <p className="text-green font-bold">(0)</p>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="container max-w-[1050px] min-h-[500px] mx-auto flex flex-row justify-center gap-7 mobile:flex-col mobile:items-center mobile:px-10 mobile:w-[80%]">
          <div className="min-w-[30%]">
            <img src={singleproduct3} className="object-cover" />
          </div>
          <div className="flex flex-col gap-7 min-w-[30%] ">
            <h3 className="font-bold">the quick fox jumps over</h3>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met. Met minim Mollie non desert
              Alamo est sit cliquey dolor do met sent. RELIT official consequent
              door ENIM RELIT Mollie. Excitation venial consequent sent nostrum
              met. Met minim Mollie non desert Alamo est sit cliquey dolor do
              met sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col gap-7 min-w-[30%]">
            <div>
              <h3 className="font-bold">the quick fox jumps over</h3>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
            </div>
            <div>
              <h3 className="font-bold">the quick fox jumps over</h3>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
              <div className="flex flex-row items-center gap-5">
                <i className="fa-solid fa-chevron-right text-[9px]"></i>
                <h6>the quick fox jumps over the lazy dog</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bestseller */}
      <div className="flex  bg-verylightgray3">
        <div className="flex mx-auto max-w-[1050px] flex-col gap-6 py-12 ">
          <h3 className="font-bold pl-3 mobile:text-center">
            BESTSELLER PRODUCTS
          </h3>
          <div className="bestseller-products-container flex flex-row flex-wrap gap-5 items-center justify-center">
            {/* {products.map((product, i) => (
              <Productcard3 key={i} product={product} />
            ))} */}
          </div>
        </div>
      </div>

      {/* clients */}
      <Clients />
      <Footer />
    </>
  );
}
