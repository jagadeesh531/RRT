import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "countere",
  initialState: 0,
  reducers: {
    incrementAction: (state, action) => {
      state = state + 1;
      return state;
    },
    decrementAction: (state, action) => {
      state = state - 1;
      return state;
    },
  },
});

export const { incrementAction, decrementAction } = counterSlice.actions;
export default counterSlice.reducer;
