import React from "react";
import Button from "../details/Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div>
      <h1 className="my-5 text-2xl justify-center flex">Sign Up</h1>
      <form method="" className="flex flex-col items-center gap-y-5">
        <label
          htmlFor="username"
          className="input input-bordered flex items-center gap-2"
        >
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            className="rounded-2xl text-center dark:text-brandBlack"
          />
        </label>

        <label
          htmlFor="email"
          className="input input-bordered flex items-center gap-2"
        >
          <input type="email" name="email" id="email" placeholder="E-mail"
          className="rounded-2xl text-center dark:text-brandBlack" />
        </label>

        <label
          htmlFor="password"
          className="input input-bordered flex items-center gap-2"
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="rounded-2xl text-center dark:text-brandBlack"
          />
        </label>

        <label
          htmlFor="phone"
          className="input input-bordered flex items-center gap-2"
        >
          <input type="phone" name="phone" id="phone" placeholder="Phone"
          className="rounded-2xl text-center dark:text-brandBlack" />
        </label>

        <Link to="/profil" className="card-actions justify-start mt-3">
          <Button
            text={"SignUp"}
            bgColor={"bg-primary"}
            textColor={"text-white"}
          />
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
