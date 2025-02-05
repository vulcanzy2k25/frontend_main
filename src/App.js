import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs on every route change

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
