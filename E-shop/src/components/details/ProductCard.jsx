import React from "react"
import Button from "../details/Button"
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div
        className="grid grid-cols-1 sm:grid-cols-2
      md:grid-cols-4 gap-5 place-items-center"
      >
        {/* card section */}
        {data.map((data) => (
          <div 
          data-aos="fade-up"
          data-aos-delay={data.aosDelay}
          className="" key={data.id}>
            <div 
            className="relative group bg-brandWhite rounded-lg">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover
                rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2
              left-1/2 -translate-x-1/2 h-full w-full text-center
              group-hover:backdrop-blur-sm justify-center items-center
              duration-200">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <Link to={"/product?id="+ data.id} className="cursor-pointer hover:text-primary"><h2 className="font-semibold">{data.title}</h2></Link>
              <h2 className="font-bold mb-8">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;