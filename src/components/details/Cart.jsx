import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
        {/*Cart-button*/}
        <Link to="/cart">
        <button className="relative p-3" >
              <FaShoppingCart
                className="text-xl text-gray-600 hover:text-primary
                dark:text-gray-400 dark:hover:text-primary"
              />
              <div
                className="w-4 h-4 bg-primary text-brandWhite
                rounded-full absolute top-0 right-0 flex items-center
                justify-center text-xs"
              >
                2
              </div>
            </button>
            </Link>
    </div>
  )
}

export default Cart