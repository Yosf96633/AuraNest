import React from "react";
import { Menu, Carousel, Card } from "antd";
import { Link } from "react-router-dom";
import { iphone, laptop, skincare, perfume } from "../../../public/imgae"; // Ensure these paths are correct

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
      {/* Menu */}
      <div className="w-1/4 max-md:hidden block">
        <Menu mode="inline" items={menuItems} />
      </div>

      <div className="w-3/4 max-md:w-full">
        {/* <Carousel autoplay>
          {products.map((product, i) => (
            <div key={i}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.src} />}
                className="w-full h-full flex flex-col justify-between"
              >
                <Card.Meta title={product.name} description={product.detail} />
                <div className="text-center mt-4">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                </div>
              </Card>
            </div>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
};

export default Hero;
