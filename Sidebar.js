import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Prilinesha</h2>

      <nav>
        <NavLink to="/dashboard">Overview</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/payments">Payments</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;