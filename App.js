import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Vehicles from "./pages/Vehicles";
import Transactions from "./pages/Transactions";
import Payments from "./pages/Payments";
import Products from "./pages/Products";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { useAuth } from "./context/AuthContext";

import "./styles/layout.css";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>

        {/* LOGIN ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/*"
          element={
            user ? (
              <div className="layout">
                <Sidebar />

                <div className="main">
                  <Navbar />

                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/products" element={<Products />} />

                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </Router>
  );
}

export default App;