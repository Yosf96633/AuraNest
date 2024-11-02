import React, { useState, useEffect } from "react";
import { Spin, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_bestSellingProducts } from "../../../Redux/bestSellingProducts";
import { Rate, Button } from "antd";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom"; // Import Link for navigation
import { add_favorite } from "../../../Redux/favorite";
import { add_cart } from "../../../Redux/cart";
const BestSellingProducts = () => {
  const bestSellingProducts = useSelector((state) => {
    return state.bestSellingProducts;
  });

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/category/womens-dresses');
      const result = await response.json();
      dispatch(add_bestSellingProducts(result.products));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 my-10 place-content-center max-w-[100vw] border-b-[0.5px] border-gray-400">
        <h1 className="text-center text-xl space-x-2">
          <span>Best </span>
          <span className="text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
            Selling Products
          </span>
        </h1>
        {isLoading ? (
          <div className="w-screen grid place-content-center h-[30vh]">
            <Spin />
          </div>
        ) : (
          <div className="my-3 flex space-x-6 max-md:space-x-3 overflow-x-scroll">
            {bestSellingProducts[0].map((product, i) => (
              <div key={i} className="flex-shrink-0 flex space-y-4 max-md:space-y-2 flex-col justify-center items-center space-x-2 p-6 max-md:p-2">
                <Link to={`/products/${product.id}`} className=" size-[100%] flex flex-col space-y-4 justify-center items-center">
                <img className="object-cover size-3/5 max-md:size-2/5" src={product.thumbnail} alt={product.title} />
                <h1 className="text-xl max-md:text-base text-wrap font-bold">{product.title}</h1>
                </Link>
                <p className="space-x-2">
                  <span className="font-bold text-lg text-blue-600">
                    ${ (product.price - (product.price * product.discountPercentage) / 100).toFixed(2) }
                  </span>
                  <span className="text-gray-500 text-base line-through">{product.price}</span>
                </p>
                <div>
                  <Rate allowHalf disabled value={product.rating} />
                  <span>{`(${product.rating})`}</span>
                </div>
                <br />
                <div className="space-x-1">
                  <Button
                    onClick={()=>{
                        dispatch(add_favorite(product));
                        notification.success({message : "Add to Favorite"})
                    }}
                    icon={<AiOutlineHeart />}
                  >
                    Favourite
                  </Button>
                  <Button
                   onClick={() => {
                    dispatch(add_cart({...product , quantityOfItem : 1}))
                    notification.success({ message: "Add to Cart" })
                  }}
                    icon={<AiOutlineShoppingCart />}
                  >
                    Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSellingProducts;
