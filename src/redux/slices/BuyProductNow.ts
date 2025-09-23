import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buyProducts: null,
};
export const BuyProductNow = createSlice({
  name: "buyNow",
  initialState: initialState,
  reducers: {
    addBuyProducts: (state, action) => {
      state.buyProducts = action.payload;
    },
    clearBuyProductsNow: () => {
      return initialState;
    },
  },
});
export const { addBuyProducts, clearBuyProductsNow } = BuyProductNow.actions;
