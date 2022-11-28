import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import AddCategory from "../Pages/Dashboard/AddCategory/AddCategory";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import AllCategory from "../Pages/Dashboard/AllCategory/AllCategory";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Myproduct from "../Pages/Dashboard/Myproduct/Myproduct";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
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
            {
                path:'/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoutes><CategoryProduct></CategoryProduct></PrivateRoutes>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            }
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
            {
                path: '/dashboard/my-order',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/all-seller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/all-buyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/*',
                element: <NotFound></NotFound>
            },
        ]
    }
])

export default router;