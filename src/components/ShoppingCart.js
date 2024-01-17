import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "./HeaderHome";
import {
  removeFromCart,
  updateItemCount,
} from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ShoppingCart() {
  const shoppingCardList = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  const subtotal = shoppingCardList.reduce(
    (acc, p) => acc + p.count * p.product.price,
    0
  );

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateItemCount = (productId, newCount) => {
    dispatch(updateItemCount(productId, newCount));
  };

  const discount = subtotal >= 150 ? -30 : 0;

  return (
    <>
      <HeaderHome />
      {/* Shopping Cart Title */}
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-10 mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2">
            <h3>Shopping Cart</h3>
          </div>
        </div>
      </div>
      {/* Shopping Cart Items */}
      <div className="flex justify-center bg-verylightgray3 mobile:flex-col">
        <div className="container flex flex-col items-center pr-10 pt-8 max-w-[1050px] mobile:p-0">
          <div className="">
            <ul role="list" className="w-full">
              {shoppingCardList.map((p, index) => (
                <li key={index} className="flex py-6 w-full">
                  {/* Product Image */}
                  <div className="h-auto w-24 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={p.product.images[0].url}
                      alt="product image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex flex-row justify-between items-center w-full p-2">
                    {/* Product Name */}
                    <div className="flex flex-col justify-between w-[50%] mobile:w-[60%]">
                      <h5>
                        <a href={p.product.href}>{p.product.name}</a>
                      </h5>
                      <h5>
                        <a href={p.product.href}>{p.product.description}</a>
                      </h5>
                    </div>
                    {/* Quantity and Price */}
                    <div className="flex flex-row justify-between w-[50%] mobile:flex-col mobile:w-[30%]">
                      <div className="flex flex-row justify-between gap-2 mobile:justify-start ">
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateItemCount(p.product.id, p.count - 1)
                          }
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <h6 className="text-lightgray-500 text-base text-center border border-solid border-lightgray rounded-lg p-2 px-3">
                          {p.count}
                        </h6>
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateItemCount(p.product.id, p.count + 1)
                          }
                        >
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h6 className="">
                        {(p.count * p.product.price).toFixed(2)} TL
                      </h6>

                      {/* Remove Button */}

                      <button
                        type="button"
                        className="font-medium text-sm text-turku mobile:self-start"
                        onClick={() => handleRemoveItem(p.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-xl border-b pb-4">Order Summary</h1>
          <div class="">
            <div class="flex justify-between py-2 text-sm ">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} TL</span>
            </div>
          </div>

          <div class="">
            <div class="flex justify-between py-2 text-sm ">
              <span>Shipping</span>
              <span>30 TL</span>
            </div>
          </div>

          <div class="">
            <div class="flex justify-between py-2 text-sm ">
              <span>Discount - Free Shipping over 150 TL </span>
              <span>{discount} TL</span>
            </div>
          </div>

          {subtotal < 150 && (
            <div class="">
              <div class="flex justify-between text-xs text-danger">
                <span>
                  Free delivery if you add {(150 - subtotal).toFixed(2)} TL to
                  your shopping cart
                </span>
              </div>
            </div>
          )}

          <div class="border-t mt-4">
            <div class="flex font-semibold justify-between py-6 text-sm ">
              <span>Total cost</span>
              <span>{(subtotal + 30 + discount).toFixed(2)} TL</span>
            </div>
            <div className="mt-6">
              <Link
                to="/cart"
                className="flex items-center justify-center rounded-md border border-transparent bg-turku px-5 py-2 text-sm font-bold text-white shadow-sm"
                //onClick={onClose}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
