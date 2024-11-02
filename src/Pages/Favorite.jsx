import React from 'react';
import { Button } from 'antd';
import { AiOutlineDelete, AiOutlineLeft } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { delete_favorite } from '../../Redux/favorite';

const Favorite = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const navigate = useNavigate();

  return (
    <div className="mx-auto my-10 max-w-2xl px-4">
      <h1 className="text-3xl text-center max-md:text-xl font-semibold">
        Your <span className="font-bold text-blue-600">Favorite Choices</span>
      </h1>

      {favorites.length === 0 ? (
        <div className="w-full h-[70vh] flex flex-col items-center justify-center space-y-4">
          <p>No favourites added yet.</p>
          <Button
            type="primary"
            icon={<AiOutlineLeft />}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="flex flex-col min-h-[70vh] space-y-6 py-7">
          {favorites.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center border border-gray-200 p-4 rounded-lg shadow-md"
            >
              <img
                alt={product.title}
                src={product.thumbnail}
                className="h-16 w-16 rounded-full object-cover mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.brand ? product.brand : product.title}</h2>
                <p className="text-lg font-bold text-blue-600">
                  ${((product.price - (product.price * product.discountPercentage) / 100)).toFixed(2)}
                </p>
                <p className="text-gray-500 line-through">${product.price}</p>
              </div>
              <Button
                type="text"
                icon={<AiOutlineDelete className="text-red-500" />}
                onClick={() => dispatch(delete_favorite(product.id))}
                className="ml-4"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
