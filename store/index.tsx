import { configureStore } from "@reduxjs/toolkit";
import authreduce from "./slices/authSlice";
import counterReducer from "./slices/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authreduce,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
