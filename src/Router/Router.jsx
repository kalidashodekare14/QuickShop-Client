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
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageProducts from "../pages/Dashboard/ManageProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/details/${params.id}`),
      },
      {
        path: "/cart-checkout",
        element: (
          <PrivateRoute>
            <CartCheckout />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/allUser",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manageProducts",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:8000/details/${params.id}`)
      }
    ],
  },
]);

export default router;
