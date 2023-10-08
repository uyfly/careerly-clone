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
import { useDispatch, Provider } from "react-redux";
import Trends from "./layouts/Trends";
import Qnas from "./layouts/Qnas";
import Lounge from "./layouts/Lounge";
import Job from "./layouts/Job";
import { useEffect } from "react";
import { login } from "./store/userSlice";

function App() {
  // const dispatch = useDispatch();

  useEffect(() => {
    const handleBeforeUnload = async (e) => {
      // 새로고침 시에 사용자에게 경고 메시지를 표시할 수 있습니다.
      e.preventDefault();
      const result = await fetch("/users/kakao/user/me")
        .then((res) => res.json())
        .then((user) => console.log(user));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
