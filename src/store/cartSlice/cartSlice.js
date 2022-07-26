import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce(
        (acc, i) => acc + i.price * i.count,
        0
      );
    },
    removeProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (acc, i) => acc + i.price * i.count,
        0
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        if (findItem.count === 1) {
          return;
        } else {
          findItem.count--;
          state.totalPrice = state.items.reduce(
            (acc, i) => acc + i.price * i.count,
            0
          );
        }
      }
    },
  },
});
export const { addProduct, removeProduct, clearItems, minusItem, plusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
