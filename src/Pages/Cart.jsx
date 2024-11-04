import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete, AiOutlineLeft } from "react-icons/ai";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { delete_cart, increament, decreament } from "../../Redux/cart";
import { FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Calculate the total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantityOfItem,
    0
  );

  return (
    <div className="my-12 max-md:my-8 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl text-center max-md:text-xl font-semibold">
        Items in <span className="font-bold text-blue-600">Your Cart</span>
      </h1>

      {cart.length === 0 ? (
        <div className="w-full h-[70vh] flex flex-col items-center justify-center space-y-4">
          <p>No items found in cart!</p>
          <Button
            type="primary"
            icon={<AiOutlineLeft />}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="space-y-6 mt-6 min-h-[70vh]">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.thumbnail}
                alt={item.brand}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">
                  {item.brand ? item.brand : item.title}
                </h2>
                <p className="text-blue-600 font-bold">
                  ${(item.price * item.quantityOfItem).toFixed(2)}
                </p>
                <div className="flex items-center mt-2">
                  <Button
                    onClick={() => {
                      if (item.quantityOfItem > 1) {
                        dispatch(decreament(item.id));
                      } else {
                        message.warning("Quantity can't be less than 1.");
                      }
                    }}
                    size="small"
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantityOfItem}</span>
                  <Button
                    onClick={() => {
                      if (item.quantityOfItem < item.stock) {
                        dispatch(increament(item.id));
                      } else {
                        message.warning("You cannot add more than the available stock.");
                      }
                    }}
                    size="small"
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button
                type="text"
                onClick={() => {
                  dispatch(delete_cart(item.id));
                  message.success("Deleted from cart", 1.5);
                }}
                icon={<AiOutlineDelete className="text-red-500" />}
              />
            </motion.div>
          ))}

          <div className=" flex justify-between mt-6">
          <Button onClick={()=>{
            navigate("/")
          }} icon={<AiOutlineLeft/>}>Continue Shopping</Button>
          <div className="flex flex-col-reverse items-end">
          <Button
              type="primary"
              icon={<FaShoppingBag />}
              onClick={()=>{
                  navigate("/user_details");
              }}
            >
              Buy Now
            </Button>
            <br />
            <div className="text-lg font-normal">
              Total Price: <span className="text-blue-600 text-2xl font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
    
          </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
