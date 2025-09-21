import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "success",
  message: null,
};
export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    closeSnackbar: () => {
      return initialState;
    },
  },
});
export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
