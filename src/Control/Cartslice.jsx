import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import CourseArray from "../Components/CourseArray";
const initialState = {
  cartitems: CourseArray,
  quantity: 0,
  total: 0,
};

const Cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartRemove: (state) => {
      state.cartitems = [];
    },
    removeitem: (state, action) => {
      const itemID = action.payload;
      state.cartitems = state.cartitems.filter((item) => item.id !== itemID);
    },
    increment: (state, action) => {
      const cartItem = state.cartitems.find(
        (item) => item.id === action.payload
      );

      cartItem.quantity += 1;
    },
    decrement: (state, action) => {
      const cartItemx = state.cartitems.find(
        (item) => item.id === action.payload
      );
      cartItemx.quantity -= 1;
    },
    Calculator: (state) => {
      let mytotal = 0;
      let myquantity = 0;
      state.cartitems.forEach((item) => {
        mytotal += item.quantity * item.price;
        myquantity += item.quantity;
      });
      state.quantity = myquantity;
      state.total = mytotal;
    },
  },
});

export const { CartRemove, removeitem, increment, decrement, Calculator } =
  Cartslice.actions;
export default Cartslice.reducer;
