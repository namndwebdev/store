import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isCartOpen: false,
  cartItem: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, { payload }) => {
      toast.success(`Đã thêm ${payload.name} vào giỏ hàng`);
      state.cartItem = [...state.cartItem, payload];
      localStorage.setItem('cart', JSON.stringify(state.cartItem)); // Lưu giỏ hàng vào LocalStorage
    },
    // addToCart: (state, {payload}) => {
    // const addItem = state.cartItem.find(x=>x.name===payload.name)
    // return {...state,cartItem:[...state.cartItem,payload]}
    // },
  },
});

export const {
  setItems,
  addToCart,

} = cartSlice.actions;

export default cartSlice.reducer;
