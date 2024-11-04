import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Radio , message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SiMastercard, SiVisa, SiPaypal, SiGooglepay } from "react-icons/si";
import { FaMoneyBillAlt } from "react-icons/fa"; // Example icon for cash payment
import { FaTruck } from 'react-icons/fa'; // or HiTruck, MdLocalShipping, depending on your preference
import { empty } from "../../Redux/cart";


const User_Details = () => {
  const [loading , setLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantityOfItem,
    0
  );
  return (
    <div className=" w-screen px-8 mt-6 mb-20">
      <h1 className=" text-center text-3xl font-semibold py-6">
        Billing Details
      </h1>
      <div className=" flex flex-wrap space-y-4 justify-around max-sm:justify-between max-sm:px-6">
        <div>
          <Form layout="vertical">
            <Form.Item label="Name:" name={"name"}>
              <Input />
            </Form.Item>
            <Form.Item label="Email:" name={"email"}>
              <Input />
            </Form.Item>
            <Form.Item label="Phone:" name={"phone"}>
              <Input />
            </Form.Item>
            <Form.Item label="Address:" name={"adress"}>
              <Input />
            </Form.Item>
            <Form.Item label="Country:" name={"country"}>
              <Input />
            </Form.Item>
            <Form.Item label="State:" name={"state"}>
              <Input />
            </Form.Item>
            <Form.Item label="City:" name={"city"}>
              <Input />
            </Form.Item>
          </Form>
          <Checkbox>
            Save this information for faster check-out next time
          </Checkbox>
        </div>

        <div className=" pt-4 space-y-8">
          <div>
            <div className=" border-b-[0.5px] border-gray-400 py-4 flex items-center justify-between">
              <span>Shipping:</span>
              <span className=" text-xl font-medium">Free</span>
            </div>
            <div  className="py-6 flex items-center justify-between">
              <span>Total:</span>
              <span className=" text-xl font-medium">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className=" md:my-6">
            <Radio.Group className=" space-y-3">
              <Radio checked value={"Bank"}>
                {" "}
                <div className=" flex justify-center items-center">
                  {<div className=" text-md font-normal mr-4">From Bank :</div>}{" "}
                  {
                    <div className=" flex space-x-3 text-2xl">
                      {<SiMastercard className="text-orange-400"/>}
                      {<SiVisa  className="text-blue-800"/>}
                      {<SiPaypal  className="text-blue-400"/>}
                      {<SiGooglepay  className="text-red-600"/>}
                    </div>
                  }
                </div>
              </Radio>
              <br />
              <Radio value={"COD"}>
              <div className=" flex justify-center items-center">
                  {<div className=" text-md font-normal mr-4">Cash on delivery :</div>}{" "}
                  {
                    <div className=" flex space-x-3 text-xl text-green-600">
                       <FaMoneyBillAlt/>
                    </div>
                  }
                </div>
              </Radio>
            </Radio.Group>
          </div>
          <div className=" space-y-4">
               <Input placeholder="Coupon code (Optional)"/>
               <Button>Apply Coupon</Button>
          </div>
            <Button loading={loading} onClick={()=>{
              setLoading(true);
                setTimeout(()=>{
                  setLoading(false)
                  dispatch(empty());
                message.success("Order successfully placed")
                },3000)
            }} icon={<FaTruck/>} type="primary" block>Place Order</Button>
        </div>
      </div>
    </div>
  );
};

export default User_Details;
