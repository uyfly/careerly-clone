import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import FullLayout from "./layouts/FullLayout";
import PostCreate from "./views/ui/PostCreate";
import Home from "./layouts/Home";
import Login from "./layouts/Login";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

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
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
