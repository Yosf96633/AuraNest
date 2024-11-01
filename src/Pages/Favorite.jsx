import React from 'react';
import {  Button, } from 'antd';
import { AiOutlineDelete , AiOutlineLeft  } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { delete_favorite } from '../../Redux/favorite';
const Favorite = () => {
  const dispatch = useDispatch()
  let favorites = [];
   favorites = useSelector((state)=>{
    return state.favorite
    
  })
     const navigate = useNavigate();
  return (
    <div className=" mx-auto my-10">
      <h1 className="text-center text-2xl font-bold mb-6">Yours <span className=' text-blue-600 text-3xl'>Favorite choices</span></h1> {/* Unique title */}
      {favorites.length === 0 ? (
        <div className=" w-screen h-[70vh] grid place-content-center space-y-4"><p>No favourites added yet.</p>
         <div className=' flex justify-center'>
         <AiOutlineLeft className=' text-3xl cursor-pointer' onClick={()=>{
           navigate("/");
         }}/>
         </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-[70vh] space-y-4 py-7 px-4"> {/* Use flex column layout */}
          {favorites.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Animation when appearing
              exit={{ opacity: 0, scale: 0.8 }} // Animation when exiting
              transition={{ duration: 0.3 }} // Transition duration
              className="flex items-center border border-gray-300 p-2 rounded-lg shadow-lg" // Custom styling
            >
              <img 
                alt={product.title} 
                src={product.thumbnail} 
                className="object-cover h-16 w-16 rounded-full mr-4" // Rounded image
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-lg font-bold text-blue-600">
                  ${ (product.price - (product.price * product.discountPercentage) / 100).toFixed(2) }
                </p>
                <p className="text-gray-500 line-through">{product.price}</p>
              </div>
              <Button
                type="text"
                icon={<AiOutlineDelete />}
                onClick={() => {
                   dispatch(delete_favorite(product.id))
                }}
                className="ml-4"
              >
                Remove
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  
  );
};

export default Favorite;
