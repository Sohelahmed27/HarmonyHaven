/* eslint-disable no-dupe-keys */
import {
  createBrowserRouter,  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import AboutUs from "../pages/Home/About us/AboutUs";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

import AllInstructor from "../pages/Home/Instructors/AllInstructor/AllInstructor";
import AllClasses from "../pages/Home/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/Mycart";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },

      {
       path: "/instructors",
       element:<AllInstructor></AllInstructor>
      },
      {
        path:'/allClasses',
        element:<AllClasses></AllClasses>
      },
      {
       path: "/about",
       element:<AboutUs></AboutUs>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<Signup></Signup>
      }
    ],
   
  },
  {
    path:'/dashboard',
    element :<Dashboard></Dashboard>,
    children: [
      {
        path:'/dashboard/selectedClass',
        element:<MyCart></MyCart>
      }
    ]
  }
]);