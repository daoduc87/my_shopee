import { createSlice } from "@reduxjs/toolkit";

interface CartCountState {
  counts: {
    [key: string]: number;
  };
}
const initialState: CartCountState = {
  counts: {},
};
export const CartCountSlice = createSlice({
  name: "cartCount",
  initialState: initialState,
  reducers: {
    readCartCount: (state, action) => {
      state.counts[action.payload.productId] = action.payload.count;
    },
    clearCartCount: () => {
      return initialState;
    },
  },
});
export const { readCartCount, clearCartCount } = CartCountSlice.actions;
