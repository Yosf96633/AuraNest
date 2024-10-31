import { configureStore } from "@reduxjs/toolkit";
import flashSaleReducers from "./flashsale";
import bestSellingProductsReducers from "./bestSellingProducts"
import SlideMenuReducer from "./SlideMenu"
export const store = configureStore({
  reducer: {
    flashSale: flashSaleReducers,
    bestSellingProducts:bestSellingProductsReducers,
    SlideMenu:SlideMenuReducer,
  },
});
