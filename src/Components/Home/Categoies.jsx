import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMobileAlt, FaLaptop, FaSoap, FaAppleAlt, FaChair, FaCar } from 'react-icons/fa';

const categories = [
  { id: 1, name: "Smartphones", icon: <FaMobileAlt className="text-gray-600" />, pathname: "smartphones" },
  { id: 2, name: "Laptops", icon: <FaLaptop className="text-gray-600" />, pathname: "laptops" },
  { id: 3, name: "Fragrances", icon: <FaSoap className="text-gray-600" />, pathname: "fragrances" },
  { id: 4, name: "Groceries", icon: <FaAppleAlt className="text-gray-600" />, pathname: "groceries" },
  { id: 5, name: "Home Decoration", icon: <FaChair className="text-gray-600" />, pathname: "home-decoration" },
  { id: 6, name: "Vehicle", icon: <FaCar className="text-gray-600" />, pathname: "vehicle" },
];

const Categories = () => {

  return (
    <div className="my-12 px-10  border-b-[0.5px] border-gray-400">
      <h1 className="text-center text-xl space-x-2 my-2">
        <span>Browse by</span>
        <span className="text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">Category</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 my-8">
        {categories.map((category) => (
         <Link to={`/category/${category.pathname}`}>
          <div
            key={category.id}
            className="flex cursor-pointer items-center p-4 border rounded shadow bg-white hover:bg-gray-100 transform hover:scale-105 transition duration-200"
          >
            <div className="mr-3 text-2xl">{category.icon}</div>
            <h2 className="text-sm">{category.name}</h2>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
