import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path: '/about',
                element: <About></About>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders />
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers />
            },
        ]
    }
])