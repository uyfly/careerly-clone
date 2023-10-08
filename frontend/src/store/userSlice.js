import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    // accessToken: "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // state.accessToken = action.payload.accessToken;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      // state.accessToken = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
