import React from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import StartPage from "../pages/startpage/startPage";
import LoginPage from "../pages/loginpage/loginPage";
import Resetpassword from "../pages/forgetpassword/resetpassword";

import HomePageAuth from "./auth-pages/homePageAuth";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <StartPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/resetpassword",
    element: <Resetpassword />,
  },
  {
    path: "/homepage",
    element: <HomePageAuth />,
  },
];
const router = createBrowserRouter(routes);
function MainRoute() {
  return <RouterProvider router={router} />;
}

export default MainRoute;
