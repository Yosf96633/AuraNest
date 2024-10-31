import React from "react";
import {
  FaStore,
  FaDollarSign,
  FaShoppingBag,
  FaMoneyBillWave,
} from "react-icons/fa";

const AboutFeature = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-6 py-8">
      <div className="w-full sm:w-[200px] flex flex-col items-center space-y-2 border p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <FaStore className="text-5xl sm:text-4xl md:text-5xl text-blue-600"/>
        <h1 className="text-2xl font-bold">10.5K</h1>
        <p className="text-center text-gray-700">Sellers active on our site</p>
      </div>
      <div className="w-full sm:w-[200px] flex flex-col items-center space-y-2 border p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <FaDollarSign className="text-5xl sm:text-4xl md:text-5xl text-green-500"/>
        <h1 className="text-2xl font-bold">33K</h1>
        <p className="text-center text-gray-700">Monthly Product Sales</p>
      </div>
      <div className="w-full sm:w-[200px] flex flex-col items-center space-y-2 border p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <FaShoppingBag className="text-5xl sm:text-4xl md:text-5xl text-orange-500"/>
        <h1 className="text-2xl font-bold">45.5K</h1>
        <p className="text-center text-gray-700">Customers active on our site</p>
      </div>
      <div className="w-full sm:w-[200px] flex flex-col items-center space-y-2 border p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <FaMoneyBillWave className="text-5xl sm:text-4xl md:text-5xl text-yellow-500"/>
        <h1 className="text-2xl font-bold">25K</h1>
        <p className="text-center text-gray-700">Annual gross sales on our site</p>
      </div>
    </div>
  );
};

export default AboutFeature;
