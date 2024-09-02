import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import Shop from "../Components/Shop/Shop";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Details from "../Components/Details/Details";
import CartCheckout from "../Components/CartCheckout/CartCheckout";
import UserProfile from "../Components/UserProfile/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:8000/details/${params.id}`)
            },
            {
                path: '/cart-checkout',
                element: <PrivateRoute><CartCheckout /></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }
        ]

    }
])


export default router