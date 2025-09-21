import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: "",
};
export const DialogSlice = createSlice({
  name: "dialog",
  initialState: initialState,
  reducers: {
    openDialog: (state, action) => {
      state.open = true;
      state.title = action.payload.title;
    },
    closeDialog: () => {
      return initialState;
    },
  },
});
export const { openDialog, closeDialog } = DialogSlice.actions;
