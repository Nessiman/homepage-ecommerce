import React from "react";
import "../css/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Exclusive */}
        <div className="footer-col">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>→</button>
          </div>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <p>Madison Park, Kiosk E-06, Jakarta Barat, Indonesia</p>
          <p>admin@groupisa.com</p>
          <p>+62 813 8080 4008</p>
        </div>

        {/* Account */}
        <div className="footer-col">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="footer-col">
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
