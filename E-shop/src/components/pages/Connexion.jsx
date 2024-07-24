import React from "react";
import { Outlet, Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div className="flex justify-center sm:min-h-[200px]">
      <div className="m-5">
        <div role="tablist" className="tabs tabs-lifted flex gap-20">
          <Link className="tab font-semibold text-2xl hover:scale-110 duration-300 hover:text-primary" to="login">
            Log In
          </Link>

          <Link className="tab font-semibold text-2xl hover:scale-110 duration-300 hover:text-primary" to="signup">
            Sign Up
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Connexion;
