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
  },
});
export const { saveBuyProducts } = buyProductsSlice.actions;
