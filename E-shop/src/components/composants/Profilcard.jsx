import React from "react";
import Button from "../details/Button";
import { Link } from "react-router-dom";

const customer = {
  username: "bubule27",
  password: "**********",
  email: "bubule27@gmail.com",
  first: "Tom",
  family: "Bubule",
  adress: "12 rue du paradis",
  city: "Paris, France",
  phone: "+33 1 23 45 67 89",
};

const Profilcard = () => {
  return (
    <div>
      <div className="flex m-auto my-6 w-[60%] h-auto">
        <div className="flex m-auto flex-col">
          <h1 className="text-center font-semibold text-xl sm:text-2xl text-primary">
            Profil
          </h1>
          <br />
          <div>
            <p>Username : {customer.username}</p>
          </div>
          <br />
          <div>
            <p>Password : {customer.password}</p>
          </div>
          <br />
          <div>
            <p>Email : {customer.email}</p>
          </div>
          <br />
          <div>
            <p>Firstname : {customer.first}</p>
          </div>
          <br />
          <div>
            <p>Familyname : {customer.family}</p>
          </div>
          <br />
          <div>
            <p>Adress : {customer.adress}</p>
          </div>
          <br />
          <div>
            <p>City : {customer.city}</p>
          </div>
          <br />
          <div>
            <p>Phone number : {customer.phone}</p>
          </div>
          <br />
          <Link to="/editprofil" className="mx-8 text-center">
            <Button
              text={"Edit Profil"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profilcard;
