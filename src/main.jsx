import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { PAGE_ROUTES } from "./constants/page_routes.js";
import { Login } from "./pages/Login/Login.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Movie } from "./pages/Movie/Movie.jsx";
import { ReviewUser } from "./pages/ReviewUser/ReviewUser.jsx";
import { Administration } from "./pages/administration/Administration.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const isAuthenticated = () => {
  const token = sessionStorage.getItem("token")
  if(!token) return false
  return true;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: PAGE_ROUTES.LOGIN,
        element: <Login></Login>,
      },
      {
        path: PAGE_ROUTES.MOVIE,
        element: <Movie></Movie>,
      },
      {
        path: PAGE_ROUTES.REVIEW,

        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ReviewUser></ReviewUser>
          </ProtectedRoute>
        ),
      },
      {
        path: PAGE_ROUTES.ADMINISTRATION,
        element: <Administration />,
      },

      //  {
      //   path:"home",
      //   element : <Home></Home>
      // },
      // {
      //   path: PAGE_ROUTES.DASHBOARD,
      //   element : <Dashboard></Dashboard>
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
