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
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item.id !== itemId);
    },

    //***Increase the amount
    increase: (state, action) => {
      // console.log(action)
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      product.amount = product.amount + 1;
    },

    //***Decrease the amount
    decrease: (state, action) => {
      // console.log(action)
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      product.amount = product.amount - 1;
    },

    // Total price and amount
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
