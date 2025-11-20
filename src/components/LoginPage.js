// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth(app);

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errs.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errs.email = "Enter a valid email";
    }

    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);

      // Save session
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isSignedUp", "true");
      localStorage.setItem("user", JSON.stringify({
        email: user.email,
        uid: user.uid,
      }));

      setErrors({});
      setSuccess("Login successful!");

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      console.error("Login error:", err.message);
      setErrors({ general: "Invalid email or password" });
      setSuccess("");
    }
  };

  return (
    <div className="login3-container">
      <div className="login3-left">
        <div className="login3-overlay">
          <h1>Welcome Back!</h1>
          <p>Login to continue shopping your favorite groceries.</p>
        </div>
      </div>
      <div className="login3-right">
        <form className="login3-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          {errors.general && (
            <p className="login3-error" style={{ textAlign: "center" }}>
              {errors.general}
            </p>
          )}

          <div className="login3-form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <span className="login3-error">{errors.email}</span>}
          </div>

          <div className="login3-form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
            />
            {errors.password && <span className="login3-error">{errors.password}</span>}
          </div>

          <button type="submit" className="login3-submit">Login</button>
          {success && <p className="login3-success">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
