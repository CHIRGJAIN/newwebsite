import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import ProductTable from "../components/producttable";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      navigate("/"); // Redirect non-admins to home
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h1>Admin Dashboard</h1>
        <ProductTable />
      </div>
    </div>
  );
};

export default AdminDashboard;

//   return (
//     <div className="dashboard-wrapper">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <h2 className="sidebar-title">Admin Panel</h2>
//         <ul>
//           <li><FaHome /> Dashboard</li>
//           <li><FaUsers /> Users</li>
//           <li><FaChartBar /> Reports</li>
//           <li><FaCog /> Settings</li>
//           <li onClick={handleLogout} className="logout"><FaSignOutAlt /> Logout</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="dashboard-content">
//         <h2>Welcome, Admin</h2>
//         <div className="dashboard-cards">
//           <div className="card">
//             <h3>Total Users</h3>
//             <p>1,235</p>
//           </div>
//           <div className="card">
//             <h3>Active Users</h3>
//             <p>895</p>
//           </div>
//           <div className="card">
//             <h3>Reports Filed</h3>
//             <p>123</p>
//           </div>
//           <div className="card">
//             <h3>System Uptime</h3>
//             <p>99.9%</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
