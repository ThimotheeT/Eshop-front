import React from 'react'
import Products from '../composants/Products'
import Banner from '../composants/Banner';
import Img1 from '../../assets/product/314212337704_02.webp';

const BannerData = {
  discount : "30% OFF",
  title: "Sneakers",
  date: "10 Jan to 28 Jan",
  image: Img1,
  title2: "Air Max",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet cosecteyrt adispijfpt elit.",
  bgColor: "primary"
};

const Home = () => {
  return (
    <div>
      <Banner data={BannerData} />
      <Products />
    </div>
  )
}

export default Home