import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    postList: [],
  },
  reducers: {
    create: (state, action) => {
      state.postList.push(action.payload);
      console.log(`현재 상태 : ${JSON.stringify(state)}`);
      console.log(`전달받은 데이터 : ${JSON.stringify(action.payload)}`);
    },
  },
});

export const { create } = postSlice.actions;

export default postSlice.reducer;
