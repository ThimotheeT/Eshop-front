import React from "react";
import { CgProfile } from "react-icons/cg";

const Profil = () => {
  return (
    <div className="relative group p-3">
      <a href="#"
        className="text-2xl text-gray-600 group-hover:text-primary
  dark:text-gray-400 absolute top-1/2 -translate-y-1/2
  left-1 duration-200"
      >
        <CgProfile />
      </a>
    </div>
  );
};

export default Profil;
