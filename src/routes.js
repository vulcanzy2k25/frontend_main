import React from "react";
import Layout from "./components/Layout"; // Ensure the correct import
import Home from "./pages/Home";
import Events from "./pages/Events";
import Stay from "./pages/Stay";
import Gallery from "./pages/Gallery";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Login from "./pages/Login";
import OAuthCallback from "./pages/OAuthCallback";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Layout />, // Wrap all routes inside Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/events", element: <Events /> },
      { path: "/stay", element: <Stay /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/sponsors", element: <Sponsors /> },
      { path: "/team", element: <Team /> },
      {path: "/login", element: <Login />},
      {path: "/auth/callback", element: <OAuthCallback />},      
      { path: "*", element: <Navigate to="/" replace /> }, // Redirect unknown routes
    ],
  },
];

export default routes;
