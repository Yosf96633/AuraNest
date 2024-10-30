import { createSlice } from "@reduxjs/toolkit";

const FlashSales = createSlice({
  name: "FlashSales",
  initialState: [],
  reducers: {
    add_flashSales: (state, action) => {
        state.push(action.payload);
    },
  },
});

export default FlashSales.reducer;
export const {add_flashSales} = FlashSales.actions;
