import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import profileSlice from "./Slices/profileSlice";

const store = configureStore({
  reducer: { productSlice, profileSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
