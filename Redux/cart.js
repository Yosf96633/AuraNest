import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add_cart: (state, action) => {
      state.push(action.payload);
    },
    delete_cart: (state, action) => {
      return (state = state.filter((_) => _.id !== action.payload));
    },
    increament : (state , action) =>{
        return state = state.map((_)=>{
             if(_.id === action.payload)
               return { ..._ , quantityOfItem : _.quantityOfItem+1}
            return _;
        })
    },
    decreament : (state , action) =>{
        return state = state.map((_)=>{
             if(_.id === action.payload)
               return { ..._ , quantityOfItem : _.quantityOfItem-1}
            return _;
        })
    },
  },
});

export default cart.reducer;

export const { add_cart, delete_cart , increament , decreament } = cart.actions;
