import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

export default function ShoppingCardDropdown({ isVisible, onClose }) {
  const dispatch = useDispatch();

  const shoppingCardList = useSelector((store) => store.shoppingCart.cart);

  const subtotal = shoppingCardList.reduce(
    (acc, p) => acc + p.count * p.product.price,
    0
  );

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Transition.Root show={isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-montserrat"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-darkblue">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {shoppingCardList.map((p, index) => (
                              <li key={index} className="flex py-6">
                                <div className="h-auto w-24 flex-shrink-0 overflow-hidden rounded-md ">
                                  <img
                                    src={p.product.images[0].url}
                                    alt="product image"
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="flex flex-1 flex-col justify-evenly p-2">
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h5>
                                      <a href={p.product.href}>
                                        {p.product.name}
                                      </a>
                                    </h5>
                                  </div>

                                  <div className="flex justify-between text-base ">
                                    <h6 className="text-gray-500">
                                      Quantity: {p.count}
                                    </h6>
                                    <h6 className="">
                                      {(p.count * p.product.price).toFixed(2)}{" "}
                                      TL
                                    </h6>
                                  </div>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-sm text-turku"
                                      onClick={() =>
                                        handleRemoveItem(p.product.id)
                                      }
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
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h6>Subtotal</h6>
                        <h6>{subtotal.toFixed(2)} TL</h6>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/cart"
                          className="flex items-center justify-center rounded-md border border-transparent bg-turku px-5 py-2 text-sm font-bold text-white shadow-sm"
                          onClick={onClose}
                        >
                          Go to cart
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-turku"
                            onClick={onClose}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
