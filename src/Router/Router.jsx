import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../pages/Home/Home";
import Shop from "../Components/Shop/Shop";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Details from "../Components/Details/Details";
import CartCheckout from "../Components/CartCheckout/CartCheckout";
import UserProfile from "../Components/UserProfile/UserProfile";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageProducts from "../pages/Dashboard/ManageProducts";
import AddProduct from "../pages/Dashboard/AddProduct";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AdminRoute from "../Routes/PrivateRoute/AdminRoute/AdminRoute";
import PrivateRoute from "../Routes/PrivateRoute/PrivateRoute";
import PaymentSuccess from "../Components/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Components/PaymentFail/PaymentFail";
import PaymentCancel from "../Components/PaymentCancel/PaymentCancel";
import OrderHistory from "../pages/Dashboard/OrderHistory";
import OrderItems from "../pages/Dashboard/OrderItems";
import PaymentProtectedRoute from "../Routes/PaymentProtectedRoute/PaymentProtectedRoute";
import UserOrderHistory from "../Components/UserOrderHistory/UserOrderHistory";
import DashboardOverview from "../pages/Dashboard/DashboardOverview";
import AdminProfile from "../pages/Dashboard/AdminProfile";


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
          fetch(`https://quickshop-server.onrender.com/details/${params.id}`),
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
        path: '/payment-success',
        element: <PaymentSuccess />
      },
      {
        path: '/payment-fail',
        element: <PaymentFail />
      },
      {
        path: '/payment-cancel',
        element: <PaymentCancel />
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/order-history',
        element: <UserOrderHistory></UserOrderHistory>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard/overview',
        element: <DashboardOverview></DashboardOverview>
      },
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
        element: <AddProduct />
      },
      {
        path: "/dashboard/updateProduct/:id",
        element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>,
        loader: ({ params }) => fetch(`https://quickshop-server.onrender.com/details/${params.id}`)
      },
      {
        path: '/dashboard/order-history',
        element: <OrderHistory></OrderHistory>
      },
      {
        path: '/dashboard/order-items/:id',
        element: <OrderItems></OrderItems>,
        loader: ({ params }) => fetch(`https://quickshop-server.onrender.com/order-items/${params.id}`)
      },
      {
        path: '/dashboard/admin-profile',
        element: <AdminProfile></AdminProfile>
      }
    ],
  },
]);

export default router;
