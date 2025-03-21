import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  name: string;
  age: string;
  gender: string;
}

const itemSlice = createSlice({
  name: "items",
  initialState: [] as Item[],
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
