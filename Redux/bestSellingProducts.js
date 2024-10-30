import { createSlice } from "@reduxjs/toolkit";

const bestSellingProducts = createSlice({
    name:"BestSellingProducts",
    initialState:[],
    reducers:{
        add_bestSellingProducts:(state , action)=>{
            state.push(action.payload);
        }
    }
})

export default bestSellingProducts.reducer;
export const {
  add_bestSellingProducts,
} = bestSellingProducts.actions
