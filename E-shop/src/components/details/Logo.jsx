import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="text-primary
                  font-semibold tracking-widest 
                  text-2xl uppercase sm:text-3xl">
        E-Shop
      </Link>
    </div>
  );
};

export default Logo;
