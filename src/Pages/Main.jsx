import React from "react";
import { Footer, Header } from "../Components/index";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className=" w-full h-full">
      <Header />

      <Outlet />

      <Footer/>
    </div>
  );
};

export default Main;
