import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Spin, notification, Button } from 'antd';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Rate } from 'antd';
import { useDispatch } from "react-redux";
import { add_cart } from '../../Redux/cart';
import { add_favorite } from '../../Redux/favorite';

const Cartgory = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${id}`);
      const result = await response.json();

      setProducts(result.products);
      console.log(result.products);
      

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className='min-h-screen w-screen my-6 px-6'>
      <h1 className='py-6 text-center text-xl font-semibold'>
        Best products of <span className='text-blue-500 font-bold'>{id}</span>
      </h1>
      {loading ? (
        <div className='h-screen w-screen grid place-content-center'>
          <Spin />
        </div>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 flex flex-col space-y-2 justify-center items-center p-6 border rounded shadow bg-white">
              <Link className="flex flex-col space-y-4 justify-center items-center" to={`/products/${product.id}`}>
                <img className="object-cover w-3/5" src={product.thumbnail} alt={product.title} />
                <h1 className="text-xl max-sm:text-base text-center font-bold">{product.brand ? product.brand : product.title}</h1>
              </Link>
              <p className="space-x-2 text-center">
                <span className="font-bold text-lg text-blue-600">
                  ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                </span>
                <span className="text-gray-500 text-base line-through">{product.price}</span>
              </p>
              <div className="text-center">
                <Rate allowHalf disabled value={product.rating} />
                <span>{`(${product.rating})`}</span>
              </div>
              <div className="flex space-x-1">
                <Button
                  className="max-sm:text-xs max-sm:p-1" // Adjust size for small screens
                  onClick={() => {
                    console.log(product);
                    
                   dispatch(add_favorite(product))
                    notification.success({ message: "Added to Favorites" });
                  }}
                  icon={<AiOutlineHeart />}
                >
                  Favourite
                </Button>
                <Button
                  className="max-sm:text-xs max-sm:p-1" // Adjust size for small screens
                  onClick={() => {
                    dispatch(add_cart({...product , quantityOfItem : 1}))
                    notification.success({ message: "Added to Cart" });
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
  );
}

export default Cartgory;
