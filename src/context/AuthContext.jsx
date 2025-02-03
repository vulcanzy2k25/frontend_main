// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { getUser } from "../services/operations/userAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userData = await getUser(token);
          setUser(userData); // Store user in context
        } catch (error) {
          console.error("User verification failed:", error);
          localStorage.removeItem("token"); // Remove invalid token
          setUser(null);
        }
      }
    };
    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
