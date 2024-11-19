import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="/" className="navbar-brand">
            <h1 className="brand-title">
              <span className="brand-highlight">i</span>CREAM
            </h1>
          </a>
        </div>

        <div className="footer-socials">
          <a href="#" className="social-link">
            <FaTwitter />
          </a>
          <a href="#" className="social-link">
            <FaFacebookF />
          </a>
          <a href="#" className="social-link">
            <FaLinkedinIn />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>

        <div className="footer-info">
          <div className="info-section">
            <h5>Get In Touch</h5>
            <p>Location, City, Country</p>
            <p>+012 345 67890</p>
          </div>
          <div className="info-section">
            <h5>Opening Hours</h5>
            <p>Mon – Sat, 8AM – 5PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-credits">
          <p>
            &copy; <a href="#">All Rights Reserved</a>. Designed by{" "}
            <a href="https://github.com/watermelonich/">Nich</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
