import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyProducts: [],
};
export const buyProductsSlice = createSlice({
  name: "buy",
  initialState: initialState,
  reducers: {
    saveBuyProducts: (state, action) => {
      state.buyProducts = action.payload;
    },
    clearBuyProducts: () => {
      return initialState;
    },
  },
});
export const { saveBuyProducts, clearBuyProducts } = buyProductsSlice.actions;
