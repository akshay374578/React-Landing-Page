// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Brand */}
        <div className="footer-brand-section">
          <h2 className="footer-brand">NextGen </h2>
          <p className="footer-desc">
            Delivering reliable engineering and construction solutions with
            precision.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="footer-contact-section">
          <h4>Contact</h4>
          <p>info@NextGen.com</p>
          <p>+91 9529547472</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()}  NextGen Construction. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
