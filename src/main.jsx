import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error/error-page.jsx";
import Root from "./routes/root/root.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Contact from "./routes/contact/contact.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
