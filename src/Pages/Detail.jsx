import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Spin, Rate , message} from "antd";
import { AiOutlineHeart , AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { add_favorite } from "../../Redux/favorite";
import { add_cart } from "../../Redux/cart";
import { motion } from "framer-motion";
const Detail = () => {
    const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await response.json();
      setProduct(result);
      console.log(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className=" w-screen h-screen grid place-content-center">
          <Spin />
        </div>
      ) : (
        <div className=" w-screen min-h-[100vh] my-8">
          <h1 className="text-xl text-center font-semibold max-md:text-base max-md:font-normal">
            Discover{" "}
            <span className=" text-blue-600 font-bold">{`${product.title}`}</span>{" "}
            - A Must-Have!
          </h1>
          <div className=" my-12 max-md:my-6 flex w-screen justify-evenly flex-wrap-reverse px-6">
            <div className=" bg-gray-300 my-4 rounded-lg flex justify-center cursor-pointer items-center overflow-hidden">
              <motion.img
                   initial={{scale:1}}
                   whileHover={{scale:1.05}}
                   transition={{duration:0.45 , ease:"linear"}}
               className=" object-cover" src={product.thumbnail} alt={product.brand} />
            </div>
            <div className=" max-w-[40vw] my-4 max-sm:max-w-[100vw] space-y-3 max-md:space-y-3">
              <div className=" text-3xl font-semibold max-md:text-xl">{product.brand ? product.brand : product.title}</div>
              <div className=" flex space-x-2 items-center">
                    <Rate allowHalf disabled value={product.rating}/>
                    <span className=" text-xs px-4 border-gray-700 border-r-[0.5px]">{`(${product.rating.toFixed(2)})`}</span>
                    <span className=" text-green-400 pl-2 text-xs">{product.availabilityStatus}</span>

              </div>
              <div>
                <p className="space-x-2">
                  <span className="font-bold text-lg text-blue-600">
                    $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                  </span>
                  <span className="text-gray-500 text-base line-through">
                    {product.price}
                  </span>
                </p>
              </div>
              <div>
                <p className=" text-xs">{product.description}</p>
              </div>
              <div>
                <p className=" text-xs border-b-[0.5px] border-gray-300 pb-8">*{product.returnPolicy}</p>
              </div>
              <div className=" flex justify-around ">
                <Button onClick={()=>{
             dispatch(add_favorite(product))
             message.success("Add to Favorite" , 1.5)
                }}  icon={<AiOutlineHeart/>}>Favorite</Button>
                <Button  onClick={()=>{
             dispatch(add_cart({...product , quantityOfItem:1}))
             message.success("Add to cart" , 1.5)
                }} icon={<AiOutlineShoppingCart/>}>Cart</Button>
                <Button icon={<FaShoppingBag/>}>Buy now</Button>
                
              </div>
            </div>
          </div>
          <div className=" flex flex-col">
          <h1 className="text-xl text-center font-semibold max-md:text-base max-md:font-normal">
            Reviews by {" "}
            <span className=" text-blue-600 font-bold">Worthy Customers</span>{" "}
              <div className=" flex flex-wrap justify-center items-center space-y-8 mt-4 px-6">
                {
                    product.reviews!==0 && product.reviews.map((_ , i)=>{
                        return <div className=" flex text-base mx-6 items-center justify-center border-b-[0.5px] border-gray-400 p-6 flex-col" key={i}>
                              <div>
                                   <h1>{_.reviewerName}</h1>
                                   <p>{_.reviewerEmail}</p>
                              </div>
                             <div>
                             <Rate disabled allowHalf value={_.rating}/>
                             <span>{`(${_.rating})`}</span>
                             <p>{_.comment}</p>
                             </div>

                        </div>
                    })
                }
              </div>
          </h1>
          </div>
        </div>

      )}
    </div>
  );
};

export default Detail;
