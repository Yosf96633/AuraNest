import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { toggle } from "../../Redux/SlideMenu";

const SlideMenu = () => {
    const parent = {
        initial:{
            width:"0vw",
        },
        animate:{
            width:"100vw",
            transition:{
                duration:0.45,
                ease:"linear",
                staggerChildren:0.3,
                delayChildren:0.1,
            }
        },
        exit: {
            width: "0vw",
            transition: {
                duration: 0.45,
                ease: "linear",
                staggerChildren: 0.1,
                delay:0.35
            },
        },
    }
    const child = {
        initial:{
            opacity:0,
            y:"100%"
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:0.25,
                ease:"linear",
            }
        }, 
        exit: {
            opacity: 0,
            y: "100%",  // Move down before exiting
            transition: {
                duration: 0.1,
                ease: "linear",
            },
        },
    }
    const dispatch = useDispatch();
  return (
    <motion.div
    variants={parent}
    initial={"initial"}
    animate={"animate"}
    exit={"exit"}
     className=" backdrop-blur-lg  h-screen absolute z-50 top-0 right-0 py-20">
      <motion.div variants={child} className=" flex justify-between my-8 px-6">
        <h1 className=" text-3xl font-semibold">
            AuraNest
        </h1>
        <AiOutlineClose className=" text-4xl" onClick={()=>{
            dispatch(toggle(false))
        }}/>
      </motion.div>
         <motion.div variants={child} className=" block text-2xl font-bold my-8 text-center">
         <Link onClick={()=>{
             dispatch(toggle(false))
        }} to={"/"}>Home</Link>
         </motion.div>
         <motion.div variants={child} className=" block text-2xl font-bold my-8 text-center">
         <Link onClick={()=>{
             dispatch(toggle(false))
        }} to={"/about"}>About</Link>
         </motion.div>
         <motion.div variants={child} className=" block text-2xl font-bold my-8 text-center">
         <Link onClick={()=>{
             dispatch(toggle(false))
        }} to={"/contact"}>Contact</Link>
         </motion.div>

    </motion.div>
  );
};

export default SlideMenu;
