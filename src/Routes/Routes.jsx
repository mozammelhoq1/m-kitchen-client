import {
    createBrowserRouter,
  } from "react-router-dom";
    import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <h1>About</h1>,
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>,
        },
        {
          path: "/:pathMatch(.*)*",
          element: <h1>Not Found</h1>,
        },
      ],
    },
  ]);