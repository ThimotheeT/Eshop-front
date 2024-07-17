import React from "react";
import { FaLinkedin, FaLocationArrow, FaMobileAlt, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="dark:bg-brandBlack">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-10 pt-5">
          {/* company details */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <a
              href="#"
              className="text-primary
                  font-semibold tracking-widest 
                  text-2xl uppercase sm:text-3xl flex justify-center"
            >
              E-Shop
            </a>
            <p className="text-gray-600 dark:text-gray-400 px-4 pt-3 flex justify-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus ratione sed dicta ipsam laborum.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4 flex justify-center">Made with love by Tim</p>
            <a
              href="#"
              className=" bg-primary/90 text-brandWhite
            py-2 mx-12 mt-4 text-sm rounded-full flex justify-center"
            >
              Contact Us
            </a>
          </div>

          {/* Map */}
          <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-left mb-3 flex justify-center">Map</h1>
          </div>
  
            {/* Company Adress */}
            <div className="py-8 px-4 col-span-2 sm:col-auto ">
            <h1 className="text-xl font-bold sm:text-left mb-3 flex justify-center pb-8">
                Address</h1>
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
                    <a href="#" >
                        <FaSquareInstagram className="text-3xl hover:text-primary duration-300" />
                    </a>
                    <a href="#" >
                        <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                    </a>
                    <a href="#" >
                        <AiFillTikTok className="text-3xl hover:text-primary duration-300" />
                    </a>
                    <a href="#" >
                        <FaFacebookSquare className="text-3xl hover:text-primary duration-300" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;