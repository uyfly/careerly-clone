import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FullLayout from "./layouts/FullLayout";
import PostCreate from "./views/ui/PostCreate";
import Home from "./layouts/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout />,
    children: [{ path: "/home", element: <Home /> }],
  },
  { path: "/posts/create", element: <PostCreate /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
