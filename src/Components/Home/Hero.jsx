import React from "react";
import { Menu, Carousel, Card } from "antd";
import { Link } from "react-router-dom";
import { iphone, laptop, skincare, perfume } from "../../../public/imgae";
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
    detail:
      "Gentle face wash infused with cucumber extract for refreshing clean.",
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
    label: <Link to="/mens-clothing">Men's Clothing</Link>,
    children: [
      { key: "tops", label: <Link to="/mens-clothing/tops">Tops</Link> },
      {
        key: "bottoms",
        label: <Link to="/mens-clothing/bottoms">Bottoms</Link>,
      },
      {
        key: "outerwear",
        label: <Link to="/mens-clothing/outerwear">Outerwear</Link>,
      },
      {
        key: "activewear",
        label: <Link to="/mens-clothing/activewear">Activewear</Link>,
      },
      {
        key: "accessories",
        label: <Link to="/mens-clothing/accessories">Accessories</Link>,
      },
    ],
  },
  {
    key: "womens-clothing",
    label: <Link to="/womens-clothing">Women's Clothing</Link>,
    children: [
      { key: "tops", label: <Link to="/womens-clothing/tops">Tops</Link> },
      {
        key: "dresses",
        label: <Link to="/womens-clothing/dresses">Dresses</Link>,
      },
      {
        key: "bottoms",
        label: <Link to="/womens-clothing/bottoms">Bottoms</Link>,
      },
      {
        key: "outerwear",
        label: <Link to="/womens-clothing/outerwear">Outerwear</Link>,
      },
      {
        key: "accessories",
        label: <Link to="/womens-clothing/accessories">Accessories</Link>,
      },
    ],
  },
  {
    key: "beauty-cosmetics",
    label: <Link to="/beauty-cosmetics">Beauty and Cosmetics</Link>,
  },
  {
    key: "home-kitchen",
    label: <Link to="/home-kitchen">Home & Kitchen</Link>,
  },
  {
    key: "electronics",
    label: <Link to="/electronics">Electronics</Link>,
  },
  {
    key: "sports",
    label: <Link to="/sports">Sports</Link>,
  },
];

const Hero = () => {
  return (
    <div className="w-full max-h-[40vh] flex max-md:justify-center mt-4">
      {/* Menu */}
      <div className="w-1/4 max-md:hidden block">
        <Menu className="" mode="inline" items={menuItems} />
      </div>

      <div className="w-3/4 max-md:w-full">
        {/* <Carousel>
          {products.map((product, i) => {
            return <></>;
          })}
        </Carousel> */}
      </div>
    </div>
  );
};

export default Hero;
