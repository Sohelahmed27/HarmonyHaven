import {
  createBrowserRouter,  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Instructors/Instructors";
import AboutUs from "../pages/Home/About us/AboutUs";

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
      }
    ]
  },
]);