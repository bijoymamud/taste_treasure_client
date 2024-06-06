import {
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ContactUs from "../pages//Contact/ContactUs";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Order from "../pages/OrderFood/Order";
import OurMenu from "../pages/OurMenu/OurMenu";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";



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


    ],


  },

  //dashboard router start
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart />
      }
    ]
  }



]);