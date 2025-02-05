import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar"; // Ensure correct path

export default function Layout() {
  const location = useLocation();

  // Define routes where the navbar should NOT be displayed
  const hideNavBarRoutes = ["/login", "/auth/callback" ,"/updateProfile","/event"];
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <div className="   ">
      {/* Conditionally render the NavBar */}
      {shouldShowNavBar && <NavBar />}

      {/* Main Content */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
