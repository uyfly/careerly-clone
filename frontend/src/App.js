import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import FullLayout from "./layouts/FullLayout";
import PostCreate from "./views/ui/PostCreate";
import Home from "./layouts/Home";
import Main from "./layouts/Main";
import Login from "./layouts/Login";
import Profiles from "./layouts/Profiles";
import Onboarding from "./layouts/Onboarding";
import KakaoCallback from "./auth/KakaoCallback";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Trends from "./layouts/Trends";
import Qnas from "./layouts/Qnas";
import Lounge from "./layouts/Lounge";
import Job from "./layouts/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/home", element: <Home /> },
        { path: "/trends", element: <Trends /> },
        { path: "/qnas", element: <Qnas /> },
        { path: "/job", element: <Job /> },
        { path: "/lounge", element: <Lounge /> },
        { path: "/profiles", element: <Profiles /> },
      ],
    },
    {
      path: "/posts/create",
      element: <PostCreate />,
    },
    { path: "/login", element: <Login /> },
    { path: "/auth/kakao/callback", element: <KakaoCallback /> },
    { path: "/onboarding", element: <Onboarding /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
