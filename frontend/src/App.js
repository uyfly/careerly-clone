import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import FullLayout from "./layouts/FullLayout";
import PostCreate from "./views/ui/PostCreate";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import KakaoCallback from "./auth/KakaoCallback";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
    ],
  },
  { path: "/posts/create", element: <PostCreate /> },
  { path: "/login", element: <Login /> },
  { path: "/auth/kakao/callback", element: <KakaoCallback /> },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
