import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Main, Home, Contact, About , Favorite } from "./Pages/page";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main/>}>
      <Route index element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/favorite" element={<Favorite/>} />

    </Route>
  )
);
const App = () => {
  return (
    <div className=" h-screen w-screen relative z-0">
      <RouterProvider router={route}/>
    </div>
  );
};

export default App;
