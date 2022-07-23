import { configureStore } from "@reduxjs/toolkit";

import filter from "./filterSlice/filterSlice";

export const store = configureStore({
  reducer: {
    filter,
  },
});
