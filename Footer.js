// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
// import qrCode from "../assets/qr-code.png"; // Replace with your actual QR image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="social-media">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* <div className="qr-code"> */}
          {/* <h4>Scan to Connect</h4> */}
          {/* <img src={qrCode} alt="QR Code" /> */}
        {/* </div> */}

      </div>
      <p className="footer-note">© 2025 ZONOMO. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
