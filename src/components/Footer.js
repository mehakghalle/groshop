import React from "react";
import '../App.css';

const Footer = () => {
  return (
    <footer className="gfooter">
      <div className="gfooter-top">
        <div className="gfooter-section gfooter-about">
          <h2>GroShop</h2>
          <p>
            Delivering fresh groceries and daily essentials with care and quality.
          </p>
        </div>

        <div className="gfooter-section gfooter-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </div>

        <div className="gfooter-section gfooter-payments">
          <h3>We Accept</h3>
          <div className="gfooter-payment-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-amex"></i>
          </div>
        </div>
      </div>

      <div className="gfooter-bottom">
        &copy; {new Date().getFullYear()} GroShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
