import React from 'react'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <>
    
  <header className="header">
    <h1>About GroShop</h1>
    <p>Your trusted grocery partner, committed to freshness and convenience.</p>
  </header>
  <section className="about">
    <div className="about-image">
      <img src="../Image/card.jpg" alt="GroShop Team" />
    </div>
    <div className="about-text">
      <h2>Who We Are</h2>
      <p>
        GroShop was founded with a simple idea: make fresh, high-quality
        groceries accessible to everyone, anytime. From local farms to your
        table, we bridge the gap with technology and care.
      </p>
      <p>
        Our mission is to deliver an exceptional grocery shopping experience
        that saves you time, money, and energy.
      </p>
      <Link to="/categorydashboard" className="btn">
        Explore Our Services
      </Link>
    </div>
  </section>
  <section className="values">
    <h2>Our Core Values</h2>
    <div className="value-carts">
      <div className="cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
          alt="Freshness"
        />
        <h3>Freshness</h3>
        <p>
          We partner directly with local growers to bring you the freshest
          produce every day.
        </p>
      </div>
      <div className="cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3285/3285455.png"
          alt="Sustainability"
        />
        <h3>Sustainability</h3>
        <p>
          Eco-friendly packaging and practices are at the heart of everything we
          do.
        </p>
      </div>
      <div className="cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          alt="Customer First"
        />
        <h3>Customer First</h3>
        <p>
          We're here for you 24/7 to ensure your satisfaction and convenience.
        </p>
      </div>
    </div>
  </section>
</>
  )
}

export default About;