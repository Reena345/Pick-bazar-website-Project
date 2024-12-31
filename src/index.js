import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import LoginPage from "./Components/Forms/LoginPage/LoginPage";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails";
import { Provider } from "react-redux";
import store from "./store";
import ProfileDashboard from "./Components/MyAcount/MyAcount";
import ChangePassword from "./Components/MyAcount/ChangePassword";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/LoginPage ",
        element: <LoginPage />,
      },
      {
        path: "/ProductsDetails/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/ProfileDashboard",
        element: <ProfileDashboard />,
      },
      {
        path: "/ChangePassword",
        element: <ChangePassword />,
      },
      {
        path: "*", 
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
