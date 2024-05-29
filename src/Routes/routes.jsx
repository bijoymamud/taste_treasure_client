import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../pages//Contact/ContactUs";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";



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
      }

    ]
  },
]);