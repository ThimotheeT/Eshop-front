import React from "react";
import Img1 from "../../assets/product/314212337704_02.webp";
import Img2 from "../../assets/product/nike-air-max-intrlk-lite-gs.jpg";
import Img3 from "../../assets/product/Basket-enfant-lacets-et-scratch-Blanche-1.webp";

const data = [
  {
    id: 1,
    title: "Homme",
    image: Img1,
  },
  {
    id: 2,
    title: "Femme",
    image: Img2,
  },
  {
    id: 3,
    title: "Enfant",
    image: Img3,
  },
];

const Gridcategories = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 place-items-center">
        {data.map((data) => (
          <div className="" key={data.id}>
            <div className="relative group bg-primary rounded-lg">
              <h2 className="font-semibold text-xl text-brandWhite text-center cursor-pointer hover:text-brandBlack">
                {data.title}
              </h2>
              <img
                data-aos="zoom-in"
                src={data.image}
                alt=""
                className="h-[180px] w-[260px] object-cover
                rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gridcategories;
