import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "../feature/user/UserConfig"
import CardReducer from "../feature/counter/CounterSlice"
export const store = configureStore({
  reducer: {
    cartUser: cartReduser,
    cartCounter: CardReducer,
  },
});
