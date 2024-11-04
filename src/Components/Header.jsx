import React, { useRef } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import { Input  ,  Badge , Tooltip , message} from 'antd'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi'; // From Feather Icons
import {  useDispatch  , useSelector} from 'react-redux';
import { toggle } from "../../Redux/SlideMenu"
import { SlideMenu } from "../Components/index"
import { AnimatePresence } from 'framer-motion';
const Header = () => {
  const ref = useRef()
  const slideMenu = useSelector((state)=>{
    return(state.SlideMenu);
    
  })
  const cart = useSelector((state) =>{
    return state.cart;
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <header className=' flex items-center  justify-between py-6 px-10 max-md:py-4 max-md:px-6 border-b-[1px]'>
          <h1 onClick={()=>{
            navigate("/")
          }} className=' cursor-pointer text-3xl max-md:text-xl font-semibold'>AuraNest</h1>
          <nav className=' space-x-6 md:block hidden text-xs'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
        <div className=' flex space-x-5 items-center'>
             <Input.Search ref={ref} onSearch={(e)=>{
              if(e)
              {
                navigate(`/search?query=${e}`)
                ref.current.input.value = ""
              }
                else
                message.warning("Search field should'nt be empty")
             }} className=' max-md:hidden block'  placeholder='What are you looking for?'/>
             
     <Tooltip title="Favorite" placement='top'>
     <AiOutlineHeart onClick={()=>{
      navigate("/favorite");
     }} className="size-7 cursor-pointer max-md:size-5" title="Favorite" />
     </Tooltip>
     <Tooltip title="Cart" placement='top'>
     <Badge count={cart.length} showZero style={{ backgroundColor: 'red' }}>
      <AiOutlineShoppingCart onClick={()=>{
      navigate("/cart");
     }} className="size-6 cursor-pointer max-md:size-5" title="Cart" />
      </Badge>
     </Tooltip>
    <FiMenu onClick={()=>{
          dispatch(toggle(true))  
    }}  className="size-6 max-md:size-5 md:hidden block" title="Menu"  />
        </div>
       <AnimatePresence>
       { slideMenu && <SlideMenu/>}
       </AnimatePresence>
    </header>
  )
}

export default Header