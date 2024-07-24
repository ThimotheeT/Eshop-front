import React, { useEffect } from 'react'
import Productdetail from '../composants/Productdetail';
import { useParams } from 'react-router-dom';

import Img1 from "../../assets/product/001435742_101.avif";
import Img2 from "../../assets/product/001488292_101.avif";
import Img3 from "../../assets/product/air-force-1-low-stussy-fossil-999639.webp";
import Img4 from "../../assets/product/balenciaga-sneaker-track-blanche-en-maille-et-nylon.jpg";
import Img5 from "../../assets/product/314212337704_02.webp";
import Img6 from "../../assets/product/001493157_101.avif";
import Img7 from "../../assets/product/1050 sur 1400-PhotoRoom OG -Photoroom (2).webp";
import Img8 from "../../assets/product/nike-air-max-intrlk-lite-gs.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Air Force",
    brand : "Nike",
    size : "40",
    price: "100",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Air Force 1",
    brand : "Nike",
    size : "41",
    price: "150",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Air Force",
    brand : "Nike",
    size : "42",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Track",
    brand : "Balenciaga",
    size : "44",
    price: "800",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Air Max",
    brand : "Nike",
    size : "40",
    price: "160",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Air Jordan",
    brand : "Nike",
    size : "42",
    price: "120",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Loewe Air",
    brand : "Loewe",
    size : "40",
    price: "350",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img8,
    title: "Air max Lite",
    brand : "Nike",
    size : "36",
    price: "80",
    aosDelay: "600",
  },
];

const Product = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const selectedProduct = ProductsData.find((product) => product.id === parseInt(id));

  return (
    <div>
      {selectedProduct && (
        <Productdetail data={selectedProduct} />
      )}
    </div>
  )
}

export default Product