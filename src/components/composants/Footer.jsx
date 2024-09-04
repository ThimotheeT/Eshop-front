import React from "react";
import {
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Button from "../details/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="dark:bg-brandBlack">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-10 pt-5">
          {/* company details */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <Link to="/"
              className="text-primary
                  font-semibold tracking-widest 
                  text-2xl uppercase sm:text-3xl flex justify-center"
            >
              E-Shop
            </Link>
            <p className="text-gray-600 dark:text-gray-400 px-4 pt-3 flex justify-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ratione sed dicta ipsam laborum.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4 flex justify-center mb-4">
              Made by Tim
            </p>
            <div className="flex justify-center">
              <Button
                text={"Contact Us"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </div>
          </div>

          {/* Links */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3 flex justify-center pb-8">
              Links
            </h1>
            <div className="flex justify-center flex-col space-y-6">
              <a
                href="#"
                className="flex justify-center cursor-pointer hover:text-primary hover:scale-125
            duration-300"
              >
                FAQ
              </a>
              <a
                href="#"
                className="flex justify-center cursor-pointer hover:text-primary hover:scale-125
            duration-300"
              >
                About Us
              </a>
              <a
                href="#"
                className="flex justify-center cursor-pointer hover:text-primary hover:scale-125
            duration-300"
              >
                Work with Us
              </a>
            </div>
          </div>

          {/* Company Adress */}
          <div className="py-8 px-4 col-span-2 sm:col-auto ">
            <h1 className="text-xl font-bold sm:text-left mb-3 flex justify-center pb-8">
              Address
            </h1>
            <div>
              <div className="flex items-center justify-center gap-3">
                <FaLocationArrow />
                <p>Paris, France</p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-6">
                <FaMobileAlt />
                <p>+33 123456789</p>
              </div>
              {/* social links */}
              <div className="flex items-center justify-center gap-3 mt-6">
                <a href="https://www.instagram.com/" target="_blank">
                  <FaSquareInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.tiktok.com/" target="_blank">
                  <AiFillTikTok className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebookSquare className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mentions */}
      <div className="flex flex-row justify-evenly">
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">
          Legal Notice
        </a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">
          CGU
        </a>
        <p>@ 2024 E-shop</p>
      </div>
    </div>
  );
};

export default Footer;
