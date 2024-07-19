import React from 'react'
import Heading from '../details/Heading'
import ProductCard from '../details/ProductCard'

import Img1 from "../../assets/product/001435742_101.avif";
import Img2 from "../../assets/product/001488292_101.avif";
import Img3 from "../../assets/product/air-force-1-low-stussy-fossil-999639.webp";
import Img4 from "../../assets/product/balenciaga-sneaker-track-blanche-en-maille-et-nylon.jpg";
import Img5 from "../../assets/product/chaussure-de-tennis-pour-surface-dure-gp-challenge-pro-pour-nTgJRw.png";
import Img6 from "../../assets/product/small_nike_dunk_low_kermit_dj6188_301_ba891cc26e.webp";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Rocky Moutain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed",
      price: "220",
      aosDelay: "600",
    },
  ];
  
  const ProductsData2 = [
    {
      id: 1,
      img: Img5,
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img6,
      title: "Rocky Moutain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img7,
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img5,
      title: "Printed",
      price: "220",
      aosDelay: "600",
    },
  ];

const Products = () => {
    return (
      <div>
        <div className='container'>
          {/* Header section */}
          <Heading title="Our Best Sellers"
          subtitle={"Explore Our Products"} />
          {/* Body section */}
          <ProductCard data={ProductsData} />
          <ProductCard data={ProductsData2} />
        </div>
      </div>
    )
  }
  
  export default Products;