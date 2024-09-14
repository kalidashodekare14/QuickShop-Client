import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { CartProvider } from "react-use-cart";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
