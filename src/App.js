// App.js
import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const CategoryDashboard = lazy(() => import("./components/CategoryProductDashbord"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const LoginPage = lazy(() => import("./components/LoginPage"));
const CartPage = lazy(() => import("./components/CartPage"));
const CheckoutPage = lazy(() => import("./components/CheckoutPage"));
const SignupPage = lazy(() => import("./components/SignupPage"));
const ProductList = lazy(() => import("./components/ProductList"));
const SearchResults = lazy(() => import("./components/SearchResults"));

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.name === product.name);
      if (existing) {
        return prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (name, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <Suspense fallback={<div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/categorydashboard"
            element={<CategoryDashboard addToCart={addToCart} />}
          />

          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/productlist" element={<ProductList />} />

          {/* FIXED: Passing addToCart */}
          <Route
            path="/search"
            element={<SearchResults addToCart={addToCart} />}
          />

          <Route
            path="/cartpage"
            element={
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeItem={removeFromCart}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <CheckoutPage cartItems={cartItems} clearCart={clearCart} />
            }
          />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
