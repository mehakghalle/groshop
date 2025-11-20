import React, { useState } from "react";
import "../App.css";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CheckoutPage = ({ cartItems, clearCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    paymentMethod: "Card"
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    formData.name &&
    formData.address &&
    formData.email &&
    formData.phone
  ) {
    const order = {
      customer: formData,
      items: cartItems,
      total: totalPrice.toFixed(2),
      createdAt: Timestamp.now(),
    };

    try {
      await addDoc(collection(db, "orders"), order);
      console.log("Order placed:", order); // ✅ DEBUG
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error("Error saving order:", error.message); // ✅ Show reason
      alert("Failed to place order: " + error.message);
    }
  } else {
    alert("Please fill in all required fields.");
  }
};


  if (orderPlaced) {
    return (
      <div className="checkout-success fade-in">
        <h2>🎉 Thank you for your order!</h2>
        <p>Your groceries will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container fade-in">
      <h2>Checkout</h2>

      <div className="checkout-content">
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.name} className="checkout-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <p className="total-price">
            Total: <strong>₹{totalPrice.toFixed(2)}</strong>
          </p>
        </div>

        {/* Checkout Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Billing Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Card">Credit/Debit Card</option>
            <option value="COD">Cash on Delivery</option>
            <option value="UPI">UPI</option>
          </select>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
