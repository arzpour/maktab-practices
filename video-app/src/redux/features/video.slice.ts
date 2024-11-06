import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm } from "../../types/video.type";

export interface videoState {
  list: IForm[];
  isSorted: boolean;
}

const initialState: videoState = {
  list: [],
  isSorted: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<IForm>) => {
      state.list.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((el) => el.id !== action.payload);
    },
    sortTable: (state, action: PayloadAction<keyof IForm>) => {
      state.isSorted = !state.isSorted;
      const key = action.payload;

      state.list.sort((a, b) => {
        if (state.isSorted) {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      });
    },
  },
});

export const videoActions = videoSlice.actions;
export const videoReducer = videoSlice.reducer;
