import {
  createBrowserRouter,  
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Instructors/Instructors";
import AboutUs from "../pages/Home/About us/AboutUs";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProvidedClasses from "../pages/Home/ProvidedClasses/ProvidedClasses";
import AllInstructor from "../pages/Home/Instructors/AllInstructor/AllInstructor";

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
        path:'/providedClass',
        element:<ProvidedClasses></ProvidedClasses>
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