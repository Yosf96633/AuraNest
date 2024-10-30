import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaShippingFast, FaHeadset } from "react-icons/fa";

const Features = () => (
  <div className=" flex flex-col justify-center items-center mt-8 md:py-8 ">
    <h1 className=" text-center text-xl space-x-2 my-2">
      <span>Why choose</span>
      <span className=" text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
        US
      </span>
      <span>?</span>
    </h1>
    <div className="w-full grid grid-cols-3 space-y-3 place-content-center mt-6 max-md:mt-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div className=" flex flex-col justify-center items-center space-y-3 max-md:space-y-2">
          <FaShippingFast className=" size-[3rem] max-md:size-6"/>
          <h1  className=" text-2xl max-md:text-sm font-bold">FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
      </div>
      <div className=" flex flex-col justify-center items-center space-y-3 max-md:space-y-2">
          <FaHeadset className=" size-[3rem]  max-md:size-6"/>
          <h1 className=" text-2xl max-md:text-sm font-bold">24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
      </div>
      <div className=" flex flex-col justify-center items-center space-y-3 max-md:space-y-2">
          <AiOutlineCheckCircle className=" size-[3rem]  max-md:size-6"/>
          <h1 className=" text-2xl max-md:text-sm font-bold">MONEY BACK GUARANTEE</h1>
          <p>We reurn money within 30 days</p>
      </div>
    </div>
  </div>
);

export default Features;
