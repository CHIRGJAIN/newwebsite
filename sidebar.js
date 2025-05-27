import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li onClick={() => navigate("/admin")}>Dashboard</li>
        <li onClick={() => navigate("/admin/products")}>Manage Products</li>
      </ul>
    </div>
  );
};

export default Sidebar;
