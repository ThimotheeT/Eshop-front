import React from "react";
import { FaCaretDown } from "react-icons/fa";

const DropdownLinks = [
  {
    id: 1,
    name: "Categories",
    link: "/categories",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
];

const Menu = () => {
  return (
    <div>
      <ul className="flex items-center gap-4">
      <li className="relative sm:left-6 left-4 cursor-pointer group">
        <p
          className="flex items-center gap-[2px]
                  font-semibold text-gray-500 hover:text-brandBlack dark:hover:text-brandWhite py-2"
        >
          Pages
          <span>
            <FaCaretDown
              className="group-hover:rotate-180
                    duration-300"
            />
          </span>
        </p>
        {/*Dropdown Links*/}
        <div
          className="absolute z-[9999] hidden
                  group-hover:block w-[200px] rounded-md bg-white
                  shadow-md dark:bg-gray-900 p-2 dark:text-brandWhite"
        >
          <ul className="space-y-2">
            {DropdownLinks.map((data, index) => (
              <li>
                <a
                  className="text-gray-500 
                            hover:text-brandBlack dark:hover:text-brandWhite
                            duration-200 inline-block w-full p-2 
                            hover:bg-primary/20 rounded-md
                            font-semibold"
                  href={data.link}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
      </ul>
    </div>
  );
};

export default Menu;
