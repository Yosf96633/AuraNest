import React from "react";
import {about} from "../../../public/imgae"
const AboutHero = () => {
  return (
    <div className=" flex justify-around items-center space-x-6 flex-wrap overflow-hidden space-y-6">
      <div className=" space-y-8 max-w-[50vw]">
        <h1 className=" text-4xl font-bold ">Our Story</h1>
        <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Pakistan. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{" "}
        </p>
        <p>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <div className=" size-[25rem] max-md:size-[20rem] max-sm:size-[16rem] rounded-xl overflow-hidden">
           <img
           
            className="rounded-xl cursor-pointer" src={about} alt="" />
      </div>
    </div>
  );
};

export default AboutHero;
