import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isCartOpen: false,
  cartItem: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // toast.success(`Đã thêm ${payload.name} vào giỏ hàng`);
      const addItem = state.cartItem.find(item => item.name == payload.name)
      const cartItem = addItem ? state.cartItem.map(x => x.name == addItem.name ? { ...x, quantity: x.quantity + 1 } : x) : [...state.cartItem, { ...payload, quantity: Number(1) }]
      localStorage.setItem('cart', JSON.stringify(cartItem)); // Lưu giỏ hàng vào LocalStorage
      window.location.href = '/cart';
      return { ...state, cartItem }
    },
    updateCartList: (state, { payload }) => {
      return { ...state, cartItem: payload }
    },
  },
});

export const { setItems, addToCart, updateCartList } = cartSlice.actions;
export default cartSlice.reducer;
