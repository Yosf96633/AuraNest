import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {Main , Home} from "./Pages/page";
const route = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Main/>}>
    <Route index element={<Home/>}/>
 
  </Route>)
);
const App = () => {
  return (
      <div className=" h-screen w-screen">
       <RouterProvider router={route}/>
      </div>
  );
};

export default App;
