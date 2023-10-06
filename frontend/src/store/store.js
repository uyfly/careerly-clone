import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import userReducer from "./userSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";
// import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/storageSession";

// const rootPersistConfig = {
//   key: "root",
//   storage,
// };

// const userPersistConfig = {
//   key: "user",
//   storage,
// };

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
});

// export const persistor = persistStore(store);
