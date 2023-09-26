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
import KakaoCallback from "./auth/KakaoCallback";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (element.type.name === "Login") {
    return isAuthenticated ? <Navigate to="/home" /> : <Login />;
  } else {
    return isAuthenticated ? element : <Navigate to="/" />;
  }
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Main /> },
        { path: "/home", element: <PrivateRoute element={<Home />} /> },
        { path: "/profiles", element: <PrivateRoute element={<Profiles />} /> },
      ],
    },
    {
      path: "/posts/create",
      element: <PrivateRoute element={<PostCreate />} />,
    },
    { path: "/login", element: <PrivateRoute element={<Login />} /> },
    { path: "/auth/kakao/callback", element: <KakaoCallback /> },
  ]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
