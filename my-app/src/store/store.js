import { configureStore } from "@reduxjs/toolkit";
import countereReducer from './countere'
import cartItemreReducer from './cart'

export default configureStore({
  reducer: {
    countere: countereReducer,
    cartItem: cartItemreReducer,
  },
});
