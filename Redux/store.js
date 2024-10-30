import { configureStore } from "@reduxjs/toolkit";
import flashSaleReducers from "./flashsale";
import bestSellingProductsReducers from "./bestSellingProducts"
export const store = configureStore({
  reducer: {
    flashSale: flashSaleReducers,
    bestSellingProducts:bestSellingProductsReducers,
    
  },
});
