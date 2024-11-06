import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodos } from "../../types/todo.type";

export interface CounterState {
  list: ITodos[];
}

const initialState: CounterState = {
  list: [],
};

export const counterSlice = createSlice({
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

export const todoActions = counterSlice.actions;
export const todoReducer = counterSlice.reducer;
