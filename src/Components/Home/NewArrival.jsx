import React from "react";
import { PlayStation, Woman, Speaker, Perfume2 } from "../../../public/imgae";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NewArrival = () => {
  const naviagte = useNavigate();
  return (

    <div className="w-screen p-6 ">
      <h1 className=" text-center text-xl space-x-2">
        <span>New </span>
        <span className=" text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
          Arrival
        </span>
      </h1>
      <div className=" mt-5 w-[50vw] grid grid-cols-2 place-content-center gap-4 max-md:text-base size-[60vw] max-sm:size-[90vw]">

        {/* Woman image spanning columns 2 to 3, first row */}
        <div onClick={()=>{
            naviagte("/category/womens-dresses")
        }} className="col-span-2 overflow-hidden cursor-pointer relative">
          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            className="object-cover w-full h-full"
            src={Woman}
            alt="Woman"
          />
          <div className=" absolute left-0 bottom-0 m-4 max-md:m-2">
            <h1 className=" text-2xl  max-md:text-sm font-semibold text-white">
               Women's Collection
            </h1>
            <p className=" text-white max-md:text-xs max-sm:hidden">
            Featured woman collections <br /> that give you another vibe.
            </p>
            <span className=" text-white max-md:text-[0.45rem] border-b-[1px] border-white">
              Shop Now
            </span>
          </div>
        </div>

        {/* Wireless Speaker image in column 2, second row */}
        <div onClick={()=>{
           naviagte("/products/99")
        }} className=" overflow-hidden cursor-pointer relative">
          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            className="object-cover w-full h-full"
            src={Speaker}
            alt="Speaker"
          />
           <div className=" absolute left-0 bottom-0 m-4 max-md:m-2">
            <h1 className=" text-2xl max-md:text-sm font-semibold text-white">
              Speaker
            </h1>
            <p className=" text-white max-md:text-xs max-sm:hidden">
            Amazon wireless speaker
            </p>
            <span className=" text-white max-md:text-[0.45rem] border-b-[1px] border-white">
              Shop Now
            </span>
          </div>
        </div>

        {/* Perfume image in column 3, second row */}
        <div  onClick={()=>{
           naviagte("/products/10")
        }}  className=" overflow-hidden cursor-pointer relative">
          <motion.img
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            className="object-cover w-full h-full"
            src={Perfume2}
            alt="Perfume"
          />
           <div className=" absolute left-0 bottom-0 m-4 max-md:m-2">
            <h1 className=" text-2xl max-md:text-sm font-semibold text-white">
              Perfume
            </h1>
            <p className=" text-white max-md:text-xs max-sm:hidden">
            Gucci intense oud edp
            </p>
            <span className=" text-white max-md:text-[0.45rem] border-b-[1px] border-white">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;