import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Control/Cartslice";
const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;
