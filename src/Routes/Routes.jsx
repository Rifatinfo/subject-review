import { createBrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Roots from "../Roots/Roots";
import Subjects from "../Pages/Subjects";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/subject',
        element: <Subjects></Subjects>,
      }
    ]
  },
]);

export default router;