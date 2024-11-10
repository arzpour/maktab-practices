import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoList } from "../../types/todo.type";

export interface CounterState {
  list: ITodoList;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  list: {},
  loading: false,
  error: null,
};

export const getTodoSlice = createSlice({
  name: "getTodo",
  initialState,
  reducers: {
    loadingTodo: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTodo: (state, action: PayloadAction<ITodoList>) => {
      state.loading = false;
      state.list = action.payload;
    },
    errorTodo: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list.todos = state.list.todos?.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const getTodoActions = getTodoSlice.actions;
export const getTodoReducer = getTodoSlice.reducer;
