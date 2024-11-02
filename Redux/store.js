import { configureStore } from "@reduxjs/toolkit";
import flashSaleReducers from "./flashsale";
import bestSellingProductsReducers from "./bestSellingProducts"
import SlideMenuReducer from "./SlideMenu"
import favoriteReducer from "./favorite"
import cartReducer from "./cart" 
export const store = configureStore({
  reducer: {
    flashSale: flashSaleReducers,
    bestSellingProducts:bestSellingProductsReducers,
    SlideMenu:SlideMenuReducer,
    favorite:favoriteReducer,
    cart:cartReducer,
  },
});
