import { configureStore } from "@reduxjs/toolkit";
import iconReducer from "../Features/Icon";

export const store = configureStore({
  reducer: {
    icon: iconReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;