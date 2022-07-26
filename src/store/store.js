import { configureStore } from "@reduxjs/toolkit";

import filter from "./filterSlice/filterSlice";
import cart from "./cartSlice/cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
