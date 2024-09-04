import React from "react";
import Button from "../details/Button";

const Productdetail = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:min-h-[300px] gap-4 mx-5 bg-primary rounded-3xl">
        <div data-aos="zoom-in" className='h-full flex items-center'>
          <img className='scale-125 w-[250px] md:w-[340px]
            mx-auto drop-shadow-2xl object-cover' src={data.img} alt="" />
        </div>
        <div className="flex justify-center flex-col m-auto text-brandWhite text-2xl font-bold">
          <h1 className="m-auto">Name : {data.title}</h1>
          <h2 className="m-auto">Price : {data.price}$</h2>
          <h2 className="m-auto">Brand : {data.brand}</h2>
          <h2 className="m-auto">Size : {data.size} (EU)</h2>
          <div className="my-4 mx-auto">
            <Button
              text={"Add to cart"}
              bgColor={"bg-brandGrey"}
              textColor={"text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
