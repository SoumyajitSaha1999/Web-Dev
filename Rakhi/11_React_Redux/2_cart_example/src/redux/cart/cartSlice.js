import { createSlice } from "@reduxjs/toolkit";

export const createCart = createSlice({
  name: "cartItem",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addItem } = createCart.actions;
export default createCart.reducer;
