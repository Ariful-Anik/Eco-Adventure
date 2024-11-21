import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomePageLayout from "../layouts/HomePageLayout";
import ErrorPage from "../Pages/Errorpage";
import Login from "../Pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../Pages/Register";
import AdventureCard from "../Components/AdventureCard";

import AdventureDetails from "../Pages/AdventureDetails";
import PrivateRoute from "../routes/PrivateRoute";
import Profile from "../Components/Profile";
import UpdateProfile from "../Components/UpdateProfile";
import ForgotPassword from "../Pages/ForgetPassword";



const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageLayout></HomePageLayout>,
      loader: ()=>fetch("../data.json"),
      children:[
        {
            path:'/',
            element:<AdventureCard></AdventureCard>,
            loader: ()=>fetch("../data.json"),
            
        },
        {
            path:'/adventuredetails/:id',
            element:  <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
            loader: ()=>fetch("../data.json"),
        }

      ]
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>,
            },
            {
                path:'/auth/register',
                element: <Register></Register>,
            },
            {
                path:'/auth/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute> ,
            },
            {
                path:'/auth/update-profile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute> ,
            },
            {
                path: '/auth/forgot-password',
                element: <ForgotPassword></ForgotPassword>,
            }

        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>,

    }
  ]);

  export default router;