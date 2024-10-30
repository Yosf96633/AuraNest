import React from "react";
import { Hero  , FlashSales , Categoies , BestSellingProducts, NewArrival, Marquee, Features, Footer} from "../Components/index";
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
      <Footer/>
    </div>
  );
};

export default Home;
