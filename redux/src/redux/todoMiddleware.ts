import { Middleware } from "@reduxjs/toolkit";
import { todoActions } from "./features/todoSlice";

const todoMiddleware: Middleware = (store) => (next) => (action) => {
  if (todoActions.addTodo.match(action)) {
    console.log("add-todo", action.payload);

    // console.group("add-todo", action.payload);

    // console.info("dispatching", action);

    localStorage.setItem("todo", JSON.stringify(action.payload));

    const current = store.getState();
    console.log(current);
  }
  return next(action);
};

export default todoMiddleware;

export const crashReporter: Middleware = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (error) {
    console.log(error);
    console.log(action);
    console.log(store);
  }
};
