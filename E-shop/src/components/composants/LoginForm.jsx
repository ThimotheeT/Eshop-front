import React from "react";
import Button from "../details/Button";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-5 text-2xl justify-center flex">Log In</h1>
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

        <div className="card-actions justify-start mt-3">
          <Button
            text={"LogIn"}
            bgColor={"bg-primary"}
            textColor={"text-white"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
