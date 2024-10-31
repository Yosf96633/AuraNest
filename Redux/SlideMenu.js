import { createSlice } from "@reduxjs/toolkit";



const SlideMenu = createSlice({
    name:"SlideMenu",
    initialState:false,
    reducers:{
        toggle:( state , action) =>{
              return state = action.payload;
        }
    }
})

export default SlideMenu.reducer;
export const {
 toggle,
} = SlideMenu.actions;