import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ onChange }) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const categories = useSelector((state) => state.global.categories);

  const handleCategoryClick = (categoryId) => {
    onChange(categoryId);
    setToggle(false);
  };

  return (
    <Menu
      onClick={() => setToggle(!toggle)}
      as="div"
      className="relative inline-block text-left w-full"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-start hover:bg-gray-50">
          {/* <ChevronDownIcon className="text-sm h-6 w-6 text-gray-400" aria-hidden="true" /> */}
          <i className="fa-solid fa-chevron-down fa-sm self-center"></i>
        </Menu.Button>
      </div>

      <Transition
        show={toggle}
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
                          <Link
                            to={`/shopping/${
                              filteredCategory.gender === "k"
                                ? "kadın"
                                : "erkek"
                            }/${filteredCategory.title.toLowerCase()}`}
                            key={filteredCategory.id}
                            onClick={() =>
                              handleCategoryClick(filteredCategory.id)
                            }
                            className="block w-full text-xs"
                          >
                            <h6 className="text-left hover:font-bold ">
                              {filteredCategory.gender === "k"
                                ? "Kadın "
                                : "Erkek "}
                              {filteredCategory.title}
                            </h6>
                          </Link>
                        ))}
                    </div>
                    <div className="min-w-max bg-white rounded ">
                      {categories
                        .filter(
                          (filteredCategory, i) =>
                            filteredCategory.gender === "e"
                        )
                        .map((filteredCategory, i) => (
                          <Link
                            to={`/shopping/${
                              filteredCategory.gender === "k"
                                ? "kadın"
                                : "erkek"
                            }/${filteredCategory.title.toLowerCase()}`}
                            key={filteredCategory.id}
                            onClick={() =>
                              handleCategoryClick(filteredCategory.id)
                            }
                            className="block w-full text-xs"
                          >
                            <h6 className="text-left hover:font-bold ">
                              {filteredCategory.gender === "k"
                                ? "Kadın "
                                : "Erkek "}
                              {filteredCategory.title}
                            </h6>
                          </Link>
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
