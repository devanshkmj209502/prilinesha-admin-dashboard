import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h3 className="logo">Admin </h3>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;