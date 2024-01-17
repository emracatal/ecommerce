import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderHome from "./HeaderHome";

export default function ShoppingCart() {
  const shoppingCardList = useSelector((store) => store.shoppingCart.cart);

  const subtotal = shoppingCardList.reduce(
    (acc, p) => acc + p.count * p.product.price,
    0
  );

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
      <div className="flex justify-center bg-verylightgray3">
        <div className="container flex flex-col items-center max-w-[1050px] pr-10 pt-8">
          <div className="w-full">
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
                    <div className="flex flex-col justify-between p-2">
                      <h5>
                        <a href={p.product.href}>{p.product.name}</a>
                      </h5>
                      <h5>
                        <a href={p.product.href}>{p.product.description}</a>
                      </h5>
                    </div>
                    {/* Quantity and Price */}

                    <h6 className="text-gray-500">Quantity: {p.count}</h6>

                    <h6 className="">
                      {(p.count * p.product.price).toFixed(2)} TL
                    </h6>

                    {/* Remove Button */}

                    <button
                      type="button"
                      className="font-medium text-sm text-turku"
                      // onClick={() => handleRemoveItem(p.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
