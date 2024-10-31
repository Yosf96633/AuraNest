import React from "react";
import { Hero  , FlashSales , Categoies , BestSellingProducts, NewArrival, Marquee, Features} from "../Components/index";
const Home = () => {
  return (
    <div className=" w-full  ">
      <Hero />
      <FlashSales/>
      <Categoies/>
      <BestSellingProducts/>
      <NewArrival/>
      <Marquee/>
      <Features/>
    </div>
  );
};

export default Home;
