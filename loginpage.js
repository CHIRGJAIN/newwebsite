// import React, { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa";
// import "../styles/LoginPage.css";
// import google from "../assets/google-icon.png";
// import facebook from "../assets/facebook-icon.png";
// import Float from "../assets/float.png";
// import { useNavigate } from "react-router-dom";

// const floating = Float;
// const GoogleIcon = google;
// const FacebookIcon = facebook;

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState(""); // Added email state
//   const [role, setRole] = useState(""); // Added role state

// const handleLogin = async () => {
//   try {
//     const response = await fetch("http://localhost:5050/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     console.log("Login response data:", data);

//     if (data.success) {
//       localStorage.setItem("role", data.role); // optional: save role
//       alert("✅ Successfully Logged In!");

//       if (data.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/");
//       }
//     } else {
//       alert(data.message || "Login failed");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     alert("Something went wrong.");
//     console.error(error);
//   }
// };


//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <h2 className="login-title">LOGIN</h2>
//         <p className="login-subtitle">
//           How to i get started lorem ipsum dolor sit amet?
//         </p>

//         <div className="input-container">
//           <FaUser className="input-icon" />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="input-container">
//           <FaLock className="input-icon" />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button className="login-button" onClick={handleLogin}>
//           Login Now
//         </button>

//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <h3>✅ Successfully Logged In!</h3>
//               <button onClick={() => setShowPopup(false)}>OK</button>
//             </div>
//           </div>
//         )}

//         <div className="separator">
//           <br /> <span>OR</span> <br />
//           <span>Login with Others</span>
//         </div>

//         <div className="social-login">
//           <button className="google-login">
//             <img src={GoogleIcon} alt="Google" />
//             Login with <b>google</b>
//           </button>
//           <button className="facebook-login">
//             <img src={FacebookIcon} alt="Facebook" />
//             Login with <b>Facebook</b>
//           </button>
//         </div>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <a href="#" onClick={() => navigate("/signup")}>
//             Sign up
//           </a>
//         </p>
//       </div>

//       <div className="background-image">
//         <img src={floating} alt="Background Design" />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../styles/LoginPage.css";
import google from "../assets/google-icon.png";
import facebook from "../assets/facebook-icon.png";
import Float from "../assets/float.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("role", data.role); // Optional
        alert("✅ Successfully Logged In!");

        // Redirect based on role
        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <p className="login-subtitle">Welcome back! Please login to continue.</p>

        <div className="input-container">
          <FaUser className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="login-button" onClick={handleLogin}>
          Login Now
        </button>

        <div className="separator">
          <br /> <span>OR</span> <br />
          <span>Login with Others</span>
        </div>

        <div className="social-login">
          <button className="google-login">
            <img src={google} alt="Google" />
            Login with <b>Google</b>
          </button>
          <button className="facebook-login">
            <img src={facebook} alt="Facebook" />
            Login with <b>Facebook</b>
          </button>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}
          <a href="#" onClick={() => navigate("/signup")}>
            Sign up
          </a>
        </p>
      </div>

      <div className="background-image">
        <img src={Float} alt="Background Design" />
      </div>
    </div>
  );
};

export default LoginPage;
