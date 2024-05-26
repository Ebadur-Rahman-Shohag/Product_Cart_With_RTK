import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  products: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Reducers-Clear
    clearCart: (state) => {
      state.products = [];
    },
    //remove item
    removeItem: (state, actions) => {
      const itemId = actions.payload;
      state.products = state.products.filter((item) => item.id !== itemId);
    },
  },
});
console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
