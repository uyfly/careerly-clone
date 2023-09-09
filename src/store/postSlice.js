import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { create } = postSlice.actions;

export default postSlice.reducer;
