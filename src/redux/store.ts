import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import { AuthSlice } from "./slices/AuthSlice";
import { snackbarSlice } from "./slices/SnackbarSlice";
import { rootApi } from "../services/rootApi";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { CartCountSlice } from "./slices/CartCountSlice";
import { DialogSlice } from "./slices/DialogSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { buyProductsSlice } from "./slices/BuyProductsSlice";
import { UserSlice } from "./slices/UserSlice";
import { FavoriteSlice } from "./slices/FavoriteSlice";
import { BuyProductNow } from "./slices/BuyProductNow";

const persistConfig = {
  key: "root",
  storage: storage,
};
const reducers = combineReducers({
  auth: AuthSlice.reducer,
  snackbar: snackbarSlice.reducer,
  cartCount: CartCountSlice.reducer,
  dialog: DialogSlice.reducer,
  buy: buyProductsSlice.reducer,
  user: UserSlice.reducer,
  favorite: FavoriteSlice.reducer,
  buyNow: BuyProductNow.reducer,
  [rootApi.reducerPath]: rootApi.reducer,
});
const _persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rootApi.middleware);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
export const persistor = persistStore(store);
