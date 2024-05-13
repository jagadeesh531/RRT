import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeItem: (state, action) => {
      return state;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
