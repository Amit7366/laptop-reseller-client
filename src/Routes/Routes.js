import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddCategory from "../Pages/Dashboard/AddCategory/AddCategory";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllCategory from "../Pages/Dashboard/AllCategory/AllCategory";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myproduct from "../Pages/Dashboard/Myproduct/Myproduct";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/registration',
                element: <Registration></Registration>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/add-category',
                element: <AddCategory></AddCategory>
            },
            {
                path: '/dashboard/all-category',
                element: <AllCategory></AllCategory>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/my-product',
                element: <Myproduct></Myproduct>
            },
        ]
    }
])

export default router;