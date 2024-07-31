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

  function handleClick() {
    alert('Profile edited !');
  }

const Editprofilform = () => {
  return (
    <div>
      <div className="flex m-auto my-6 w-[60%] h-auto">
        <div className="flex m-auto flex-col">
          <h1 className="text-center font-semibold text-xl sm:text-2xl text-primary">
            Edit the Profile
          </h1>
          <br />
          <div>
            <label>Username : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="text" placeholder={customer.username}/>
          </div>
          <br />
          <div>
            <label>Password : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="password" placeholder={customer.password}/>
          </div>
          <br />
          <div>
            <label>Email : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="email" placeholder={customer.email}/>
          </div>
          <br />
          <div>
            <label>Firstname : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="text" placeholder={customer.first}/>
          </div>
          <br />
          <div>
            <label>Familyname : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="text" placeholder={customer.family}/>
          </div>
          <br />
          <div>
            <label>Adress : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="text" placeholder={customer.adress}/>
          </div>
          <br />
          <div>
            <label>City : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="text" placeholder={customer.city}/>
          </div>
          <br />
          <div>
            <label>Phone number : </label>
            <input className="dark:text-brandBlack rounded-xl text-center" type="text" placeholder={customer.phone}/>
          </div>
          <br />
          <Link to="/profil" onClick={handleClick} className="mx-8 text-center">
            <Button
              text={"Edit Profile"}
              bgColor={"bg-primary"}
              textColor={"text-white"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Editprofilform;
