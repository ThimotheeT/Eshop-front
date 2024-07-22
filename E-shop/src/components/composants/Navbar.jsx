import React from "react";
import Menu from "../details/Menu";
import Searchbar from "../details/Searchbar";
import Cart from "../details/Cart";
import Profil from "../details/Profil";
import DarkMode from "../details/DarkMode";
import Logo from "../details/Logo";

const Navbar = () => {
  return (
    <div
      className="bg-brandWhite dark:bg-brandBlack 
    dark:text-brandWhite duration-200 relative z-40"
    >
      <div className="py-4 mb-4">
        <div className="container flex justify-between items-center gap-4">
          <div className="flex items-center">
            <Logo />
            <Menu />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Searchbar />
            <Cart />
            <Profil />
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
