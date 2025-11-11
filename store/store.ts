import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api";
import { clientApi } from "./api/client.api";
import { enrollApi } from "./api/enroll.api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [enrollApi.reducerPath]: enrollApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      clientApi.middleware,
      enrollApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
