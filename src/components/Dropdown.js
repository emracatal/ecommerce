import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.global.categories);

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-start hover:bg-gray-50">
          {/* <ChevronDownIcon className="text-sm h-6 w-6 text-gray-400" aria-hidden="true" /> */}
          <i className="fa-solid fa-chevron-down fa-sm self-center"></i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 transform -translate-x-[90px] w-[320px] flex justify-evenly origin-top bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block text-xs"
                  )}
                >
                  <div className="flex flex-row gap-12 ">
                    <div className="min-w-max bg-white rounded ">
                      {categories
                        .filter((category, i) => category.gender === "k")
                        .map((filteredCategory, i) => (
                          <a
                            href={`/shopping/${
                              filteredCategory.gender === "k"
                                ? "kadın"
                                : "erkek"
                            }/${filteredCategory.title.toLowerCase()}`}
                            key={i}
                            className="block w-full text-xs"
                          >
                            <h6 className="text-left hover:font-bold ">
                              {filteredCategory.gender === "k"
                                ? "Kadın"
                                : "Erkek"}
                              {filteredCategory.title.toLowerCase()}
                            </h6>
                          </a>
                        ))}
                    </div>
                    <div className="min-w-max bg-white rounded ">
                      {categories
                        .filter((category, i) => category.gender === "e")
                        .map((filteredCategory, i) => (
                          <a
                            href={`/shopping/${
                              filteredCategory.gender === "k"
                                ? "kadın"
                                : "erkek"
                            }/${filteredCategory.title.toLowerCase()}`}
                            key={i}
                            className="block w-full text-xs"
                          >
                            <h6 className="text-left hover:font-bold ">
                              {filteredCategory.gender === "e"
                                ? "Erkek"
                                : "Kadın"}
                              {filteredCategory.title}
                            </h6>
                          </a>
                        ))}
                    </div>
                  </div>
                </a>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-100",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
