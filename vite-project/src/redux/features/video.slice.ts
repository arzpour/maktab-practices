import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm } from "../../types/video.type";

// Define a type for the slice state
export interface videoState {
  list: IForm[];
}

// Define the initial state using that type
const initialState: videoState = {
  list: [],
};

export const videoSlice = createSlice({
  name: "video",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<IForm>) => {
      state.list.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },
    sortTable: (state, action: PayloadAction<keyof IForm>) => {
      const key = action.payload;
      state.list.sort((a, b) => {
        if (typeof a[key] === "string" && typeof b[key] === "string") {
          return a[key].localeCompare(b[key]);
        }
        return Number(a[key]) - Number(b[key]);
      });
    },
  },
});

export const videoActions = videoSlice.actions;
export const videoReducer = videoSlice.reducer;
