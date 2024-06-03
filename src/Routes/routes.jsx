import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../pages//Contact/ContactUs";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Order from "../pages/OrderFood/Order";
import OurMenu from "../pages/OurMenu/OurMenu";
import SignUp from "../pages/SignUp/SignUp";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <ContactUs />

      },
      {
        path: "/ourMenu",
        element: <OurMenu />
      },
      {
        path: "/order/:category",
        element: <Order />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <SignUp />
      },


    ]
  },



]);