import { useNavigate } from "react-router-dom";

function Topbar({ title }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="topbar">
      <div>
        <h2>{title}</h2>
      </div>

      <button className="action-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Topbar;