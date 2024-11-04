import React from "react";
import { Menu, Carousel, Card } from "antd";
import { Link } from "react-router-dom";
import { iphone, laptop, skincare, perfume } from "../../../public/imgae"; // Ensure these paths are correct
import { retry } from "@reduxjs/toolkit/query";

const products = [
  {
    src: iphone,
    name: "iPhone 9",
    detail: "The latest iPhone with a sleek design and powerful features.",
    price: 699.99,
  },
  {
    src: laptop,
    name: "Dell XPS 13",
    detail: "A compact and lightweight laptop with an impressive display.",
    price: 999.99,
  },
  {
    src: skincare,
    name: "Cucumber Face Wash",
    detail: "Gentle face wash infused with cucumber extract for refreshing clean.",
    price: 19.99,
  },
  {
    src: perfume,
    name: "Fancy Perfume",
    detail: "A luxurious fragrance with notes of jasmine and vanilla.",
    price: 89.99,
  },
];

const menuItems = [
  {
    key: "mens-clothing",
    label: <Link to="category/mens-shirts">Men's Clothing</Link>,
  },
  {
    key: "womens-clothing",
    label: <Link to="category/womens-dresses">Women's Clothing</Link>,
  },
  {
    key: "skin-care",
    label: <Link to="category/skin-care">Skin Cares</Link>,
  },
  {
    key: "home-kitchen",
    label: <Link to="category/kitchen-accessories">Home & Kitchen</Link>,
  },
  {
    key: "electronics",
    label: <Link to="category/mobile-accessories">Electronics</Link>,
  },
  {
    key: "sports",
    label: <Link to="category/sports-accessories">Sports</Link>,
  },
];

const Hero = () => {
  return (
    <div className="w-full max-h-[40vh] flex max-md:justify-center mt-4">
      <div className="w-1/4 max-md:hidden block">
        <Menu mode="inline" items={menuItems} />
      </div>
        <div className="w-3/4 py-8 sm:ml-24 max-md:w-full bg-gray-100">
        <Carousel autoplay>
             { products.map(( _ , i)=>{
              return <div key={ i } className=" flex items-center w-full max-h-[40vh]  md:space-y-6 px-6 overflow-hidden">
                      <h1 className=" text-3xl font-semibold max-md:text-2xl">{_.name}</h1>
                      <p className=" text-xl max-md:text-lg">{_.detail}</p>
                      <p className=" text-4xl text-blue-600 font-bold max-md:text-3xl">${_.price} <span>only</span></p>
                 
              </div>
             })}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
