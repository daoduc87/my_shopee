import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};
export const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: () => {
      return initialState;
    },
  },
});
export const { saveUserData, clearUserData } = UserSlice.actions;
