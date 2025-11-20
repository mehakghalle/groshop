import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const Home = () => {
  const slides = [
    {
      image: require("./Image/apple.jpg"),
      title: "Fresh Apples",
      description: "Crisp, juicy apples straight from the farm."
    },
    {
      image: require("./Image/broccoli.jpg"),
      title: "Organic Broccoli",
      description: "Rich in nutrients and delicious flavor."
    },
    {
      image: require("./Image/amul.png"),
      title: "Dairy Milk",
      description: "Pure and wholesome dairy goodness."
    },
    {
      image: require("./Image/pear.png"),
      title: "Sweet Pears",
      description: "Perfectly ripe and ready to eat."
    },
    {
      image: require("./Image/bread.jpg"),
      title: "Fresh Bread",
      description: "Baked daily for ultimate freshness."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="home-section">
        <div className="home-overlay">
          <div className="home-content">
            <h1>Welcome to GroShop</h1>
            <p>
              Your one-stop online grocery store offering fresh fruits, vegetables,
              dairy, snacks, and more—delivered right to your doorstep. Experience
              hassle-free shopping with quality you can trust.
            </p>
            <Link to="/categorydashboard">
            <button className="home-button">Shop Now</button></Link>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="home-slider">
        <h2>Explore Our Fresh Selection</h2>
        <p className="slider-subtext">
          Discover hand-picked products for your healthy lifestyle.
        </p>
        <div className="slider-track">
  {slides.map((slide, index) => (
    <Link to="/categorydashboard" key={index} className="slider-card-link">
      <div className="slider-card">
        <img src={slide.image} alt={slide.title} />
        <div className="slider-card-content">
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      </div>
    </Link>
  ))}
</div>
      </section>
      <Gallery/>
    </>
  );
};

export default Home;
