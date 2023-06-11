import {
  createBrowserRouter,  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Instructors/Instructors";
import AboutUs from "../pages/Home/About us/AboutUs";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
       path: "/instructors",
       element:<Instructors></Instructors>
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
    ]
  },
]);