import React, { useState } from "react";
import "../styles/ContactPage.css"; // Import the CSS file
import Header from "../components/header";

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Auto-close popup after 3 seconds
  };

  return (
    <div>
      <Header />
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>Fill out the form below, and our team will get back to you.</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Fancy Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>🎉 Success!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ContactPage;
