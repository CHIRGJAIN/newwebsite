import React, { useState } from "react";
import "../styles/SignUp.css";
import google from "../assets/google-icon.png";
import facebook from "../assets/facebook-icon.png";

const SignupPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSignup = () => {
    setShowPopup(true);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">CREATE ACCOUNT</h2>

        <div className="social-login">
          <button className="google-login">
            <img src={google} alt="Google" /> Continue with <b>google</b>
          </button>
          <button className="facebook-login">
            <img src={facebook} alt="Facebook" /> Continue with <b>Facebook</b>
          </button>
        </div>

        <div className="separator">- OR -</div>

        <div className="input-container">
          <input type="text" placeholder="FULL NAME" />
        </div>
        <div className="input-container">
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="PASSWORD" />
        </div>

        <button className="signup-button" onClick={handleSignup}>CREATE ACCOUNT</button>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>✅ Account Created Successfully!</h3>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;