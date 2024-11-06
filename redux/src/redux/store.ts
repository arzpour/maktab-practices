import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./features/todoSlice";
import todoMiddleware, { crashReporter } from "./todoMiddleware";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoMiddleware, crashReporter),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
