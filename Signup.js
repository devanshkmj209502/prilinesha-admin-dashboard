import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();

    if (data.password !== data.confirm) {
      alert("Passwords do not match");
      return;
    }

    signup(data);
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={data.name}
          onChange={(e) =>
            setData({ ...data, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={data.confirm}
          onChange={(e) =>
            setData({ ...data, confirm: e.target.value })
          }
        />

        <button type="submit">Signup</button>

        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;