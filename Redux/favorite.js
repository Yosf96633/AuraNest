import { createSlice } from "@reduxjs/toolkit";

const favorite = createSlice({
  name: "Favorite",
  initialState: [],
  reducers: {
    add_favorite: (state, action) => {
      state.push(action.payload);
    },
    delete_favorite: (state, action) => {
      return state = state.filter((_, i) => _.id != action.payload)
    },
  },
});

export default favorite.reducer;
export const { add_favorite, delete_favorite } = favorite.actions;
