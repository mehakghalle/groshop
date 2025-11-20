import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import "../App.css";

const auth = getAuth(app);

const Navbar = ({ cartCount }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("isSignedUp");
      localStorage.removeItem("user");
      navigate("/loginpage");
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
      setIsDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <div className="logo-icon"></div>
        <h1>GroShop</h1>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/home">Home</Link>

        <div
          className="dropdown"
          onClick={toggleDropdown}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link to="/categorydashboard">
            <span>Categories ▾</span>
          </Link>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/fruits">Fruits & Vegetables</Link>
              <Link to="/dairy">Dairy Products</Link>
              <Link to="/snacks">Snacks</Link>
              <Link to="/beverages">Beverages</Link>
              <Link to="/bakery">Bakery</Link>
              <Link to="/personalcare">Personal Care</Link>
            </div>
          )}
        </div>

        <Link to="/about">About Us</Link>
        <Link to="/contactpage">Contact</Link>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <Link to="/cartpage" className="cart-link">
          <div className="cart-icon-container">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </div>
        </Link>

        {isLoggedIn ? (
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/loginpage">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
