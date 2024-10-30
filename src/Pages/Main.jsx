import React from "react";
import { Header } from "../Components/index";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className=" w-full h-full">
      <Header />

      <Outlet />
    </div>
  );
};

export default Main;
