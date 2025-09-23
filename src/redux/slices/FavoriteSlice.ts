import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  favoriteIdsList: string[];
}
const initialState: initialStateType = {
  favoriteIdsList: [],
};
export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.favoriteIdsList.includes(action.payload)) {
        state.favoriteIdsList = state.favoriteIdsList.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.favoriteIdsList.push(action.payload);
      }
    },
    clearFavoritesList: () => {
      return initialState;
    },
  },
});
export const { toggleFavorite, clearFavoritesList } = FavoriteSlice.actions;
