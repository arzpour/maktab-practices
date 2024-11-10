import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodos } from "../../types/todo.type";

export interface CounterState {
  list: ITodos[];
}

const initialState: CounterState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodos>) => {
      state.list.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
