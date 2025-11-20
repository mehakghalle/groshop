import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/About';
import './components/Home';
import './components/Navbar';
import './components/ContactPage';
import './components/LoginPage';
import './components/CartPage';
import './components/CheckoutPage';
import './components/SignupPage';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
