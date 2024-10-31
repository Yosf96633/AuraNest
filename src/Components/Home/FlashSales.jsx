import React, { useState, useEffect } from "react";
import { Spin, notification } from "antd"; // Import notification for displaying alerts
import { useDispatch, useSelector } from "react-redux";
import { add_flashSales } from "../../../Redux/flashsale";
import { Rate, Button } from "antd";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const FlashSales = () => {
  const flashSale = useSelector((state) => {
    return state.flashSale;
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      const result = await response.json();
      dispatch(add_flashSales(result.products));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle adding to favourites
  const addToFavourites = (product) => {
    const existingFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const isFavourite = existingFavourites.some(item => item.id === product.id);
    
    if (!isFavourite) {
      existingFavourites.push(product);
      localStorage.setItem('favourites', JSON.stringify(existingFavourites)); // Store updated favourites
      notification.success({
        message: "Added to Favourites", // Show success toast
      });
    } else {
      notification.info({
        message: "Already in Favourites", // Show duplicate toast
      });
    }
  };

  return (
    <div className="grid grid-cols-1 my-6 place-content-center max-w-[100vw] border-b-[0.5px] border-gray-400">
      <h1 className="text-center text-xl space-x-2">
        <span> Today's</span>
        <span className="text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
          Flash Sales
        </span>
      </h1>
      {isLoading ? (
        <div className="w-screen grid place-content-center h-[30vh]">
          <Spin />
        </div>
      ) : (
        <div className="my-3 flex space-x-6 max-md:space-x-3 overflow-x-scroll">
          {flashSale[0].map((product, i) => (
            <div key={i} className="flex-shrink-0 flex space-y-4 max-md:space-y-2 flex-col justify-center items-center space-x-2 p-6 max-md:p-2">
              <img className="object-cover size-3/5 max-md:size-2/5" src={product.thumbnail} alt={product.title} />
              <h1 className="text-xl max-md:text-base text-wrap font-bold">{product.brand ? product.brand : product.title}</h1>
              <p className="space-x-2">
                <span className="font-bold text-lg text-blue-600">
                  ${ (product.price - (product.price * product.discountPercentage) / 100).toFixed(2) }
                </span>
                <span className="text-gray-500 text-base line-through">{product.price}</span>
              </p>
              <div>
                <Rate disabled value={product.rating} />
                <span>{`(${product.rating})`}</span>
              </div>
              <br />
              <div className="space-x-1">
                <Button
                  onClick={() => addToFavourites(product)} // Call addToFavourites function
                  icon={<AiOutlineHeart />}
                >
                  Favourite
                </Button>
                <Button
                  onClick={() => notification.success({ message: "Add to Cart" })}
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
  );
};

export default FlashSales;
