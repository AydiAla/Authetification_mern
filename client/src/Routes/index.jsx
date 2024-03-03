import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import About from "../pages/About.jsx";
import Layouts from "../components/Layouts/Layouts.jsx";

export const router = createBrowserRouter([
  {
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",

        element: <Register />,
      },
      {
        path: "/about",

        element: <About />,
      },
    ],
  },
]);
