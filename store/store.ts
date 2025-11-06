import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [authApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, authApi.reducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
