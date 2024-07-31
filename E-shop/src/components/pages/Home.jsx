import React, { useEffect } from 'react'
import Products from '../composants/Products'
import Banner from '../composants/Banner';
import Services from '../details/Services';
import Img1 from '../../assets/product/314212337704_02.webp';

const BannerData = {
  discount : "20% OFF",
  title: "Sneakers",
  date: "5 Aug to 15 Aug",
  image: Img1,
  title2: "Air Max",
  title3: "Summer Sale",
  title4: "Lorem ipsum, dolor sit amet cosecteyrt adispijfpt elit.",
  bgColor: "primary"
};

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner data={BannerData} />
      <Products />
      <Services />
    </div>
  )
}

export default Home