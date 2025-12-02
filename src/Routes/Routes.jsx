import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

import CardDeatils from "../Pages/CardDeatils";
import { CircleLoader } from "react-spinners";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EditProfile from "../Components/EditProfile";
import ForgatePassword from "../Components/ForgatePassword";
import ErrorPage from "../Pages/ErrorPage";
import AllSkill from "../Pages/AllSkill";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: (
      <div className="min-h-screen flex justify-center items-center">
        <CircleLoader></CircleLoader>
      </div>
    ),

    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/Data.json"),
        hydrateFallbackElement: (
          <div className="min-h-screen flex justify-center items-center">
            <CircleLoader></CircleLoader>
          </div>
        ),
      },

      {
        path: "/all-skill",
        Component: AllSkill,
        loader: () => fetch("/Data.json"),
      },

      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "/edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/forget-password",
        Component: ForgatePassword,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/card-details/:id",
        element: <CardDeatils></CardDeatils>,
        loader: () => fetch("/Data.json"),
        hydrateFallbackElement: (
          <div className="min-h-screen flex justify-center items-center">
            <CircleLoader></CircleLoader>
          </div>
        ),
      },
    ],
  },
]);
