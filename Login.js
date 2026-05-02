import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(data.email, data.password);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email or Phone"
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

        <button type="submit">Login</button>

        <p>
          Don't have account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;