import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { json } from "react-router-dom";

const defaultState = {
  value: 0,
  cartItem: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addItem: (state, { payload }) => {
      const { products } = payload;

      console.log(products);
      const item = state.cartItem.find((i) => i.cartID === products.cartID);

      if (item) {
        item.amount += products.amount;
      } else {
        state.cartItem.push(products);
      }
      state.numItemsInCart += products.amount;
      state.cartTotal += products.price * products.amount;
      state.tax += 0.1 * state.cartTotal;
      state.orderTotal += state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("item qoshildi");
    },
    clearCar: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, { payload }) => {
      const { cartID } = payload;
      const products = state.cartItem.find((i) => i.cartID === cartID);
      state.cartItem = state.cartItem.filter((i) => i.cartID !== cartID);
       state.numItemsInCart -= products.amount;
      CounterSlice.caseReducers.calculateTotols(state)
      toast.success("cart yangilandi")
    },
    eitItem: (state, { payload }) => {
        const { amount, cartID } = payload;
        const item = state.cartItem.find((i) => i.cartID === cartID);
        state.numItemsInCart += amount - item.amount;
        state.cartTotal += item.price * (amount - item.amount);
        item.amount = amount;
        cartSlice.caseReducers.calulateTotal(state);
        toast.success("Cart updated");
    },
    calculateTotols: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { increment, decrement, addItem, removeItem, clearCar, eitItem } =
  CounterSlice.actions;
export default CounterSlice.reducer;
