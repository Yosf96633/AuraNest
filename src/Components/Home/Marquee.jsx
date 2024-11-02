import React from "react";
import { motion } from "framer-motion";
import {
  SiNike,
  SiAdidas,
  SiPlaystation,
  SiMercedes,
  SiAmazon,
  SiMcdonalds,
  SiTcs,
  SiSony,
  SiAmazonalexa,
  SiWwe,
  SiZara,
  SiNear ,
  SiVisa,
  SiZomato,
} from "react-icons/si";
const Marquee = () => {
  return (
    <div className="grid place-content-center my-8">
      <h1 className=" text-center text-xl space-x-2 my-2">
        <span>Our</span>
        <span className=" text-blue-600 font-extrabold max-md:font-bold text-3xl max-md:text-2xl">
          Trusted Partners
        </span>
      </h1>
      <div className=" container mx-auto space-y-20 max-md:space-y-12 mt-8 overflow-x-hidden">
        <div className=" flex space-x-32 max-md:space-x-16">
          <motion.div
            initial={{
              x: 0,
            }}
            animate={{
              x: "-100%",
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" flex flex-shrink-0 space-x-32 max-md:space-x-16"
          >
            <SiNike className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiAdidas className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiPlaystation className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiMercedes className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiAmazon className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiMcdonalds className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiTcs className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
          </motion.div>
          <motion.div
            initial={{
              x: 0,
            }}
            animate={{
              x: "-100%",
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" flex flex-shrink-0 space-x-32 max-md:space-x-16"
          >
           <SiNike className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiAdidas className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiPlaystation className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiMercedes className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiAmazon className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiMcdonalds className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
            <SiTcs className=" size-[5rem] max-md:size-[2.5rem] flex-shrink-0" />
          </motion.div>
        </div>
        <div className=" flex space-x-32 max-md:space-x-16">
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" flex flex-shrink-0 space-x-32 max-md:space-x-16"
          >
            <SiSony className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiAmazonalexa className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiWwe className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiZara className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiNear  className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiVisa className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiZomato className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
          </motion.div>
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" flex flex-shrink-0 space-x-32 max-md:space-x-16"
          >
            <SiSony className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiAmazonalexa className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiWwe className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiZara className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiNear  className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiVisa className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
            <SiZomato className=" size-[5rem]  max-md:size-[2.5rem] flex-shrink-0" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
