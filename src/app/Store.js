import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "../feature/user/UserConfig"
export const store = configureStore({
  reducer: {
    cartUser: cartReduser,
  },
});
