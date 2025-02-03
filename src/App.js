import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
          </Route>
        ))}
      </Routes>
    </AuthProvider>
  );
}

export default App;
