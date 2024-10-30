import React from 'react';
import { FaRegEye, FaTshirt, FaBook, FaUserMd, FaRunning, FaCar } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';

const categories = [
  {
    id: 1,
    name: "Electronics",
    icon: <FaRegEye className="text-gray-600" />
  },
  {
    id: 2,
    name: "Fashion",
    icon: <FaTshirt className="text-gray-600" />
  },
  {
    id: 3,
    name: "Home & Kitchen",
    icon: <MdHome className="text-gray-600" />
  },
  {
    id: 4,
    name: "Books",
    icon: <FaBook className="text-gray-600" />
  },
  {
    id: 5,
    name: "Health & Beauty",
    icon: <FaUserMd className="text-gray-600" />
  },
  {
    id: 6,
    name: "Sports",
    icon: <FaRunning className="text-gray-600" />
  },
];

const Categories = () => {
  return (
    <div className=' my-6 max-md:my-3 border-b-[0.5px] border-gray-400'>
        <h1 className=" text-center text-xl space-x-2 my-2">
          <span>
           Browse by
          </span>
        <span className=" text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
          Category
        </span>
      </h1>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center p-4 border rounded shadow bg-white">
          <div className="mr-3 text-2xl">
            {category.icon}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Categories;
