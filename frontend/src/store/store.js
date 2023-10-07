import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
