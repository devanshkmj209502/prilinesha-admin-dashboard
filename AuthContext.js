import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // LOGIN
  const login = (email, password) => {
    if (email && password) {
      const userData = { email };

      localStorage.setItem("user", JSON.stringify(userData)); // 👈 SAVE
      setUser(userData);

      return true;
    }
    return false;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user"); // 👈 CLEAR
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);