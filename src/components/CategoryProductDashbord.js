import React, { useState } from "react";
import "../App.css";
import products from "../data/products";

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Snacks",
  "Beverages",
  "Bakery",
];

const CategoryProductDashboard = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="category-dashboard-container">
      {/* Sidebar */}
      <aside className="category-sidebar">
        <h3>Categories</h3>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={activeCategory === cat ? "category-active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="category-products">
        <h2>{activeCategory === "All" ? "All Products" : activeCategory}</h2>

        {filteredProducts.length === 0 ? (
          <p className="no-products">No products in this category.</p>
        ) : (
          <div className="category-products-grid">
            {filteredProducts.map((prod, index) => (
              <div className="category-product-card fade-in" key={index}>
                {/* Product Image */}
                <div
                  className="category-product-image"
                  style={{ backgroundImage: `url(${prod.image})` }}
                >
                  <i className="far fa-heart heart-icon"></i>
                </div>

                {/* Product Details */}
                <div className="category-product-details">
                  <h4>{prod.name}</h4>

                  {prod.quantity && (
                    <p className="quantity-text">{prod.quantity}</p>
                  )}

                  {prod.deliveryTime && (
                    <p className="delivery-time">
                      <i className="fas fa-clock"></i> {prod.deliveryTime}
                    </p>
                  )}

                  {/* Rating */}
                  <div className="rating-stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={
                          i < prod.rating ? "fas fa-star" : "far fa-star"
                        }
                      ></i>
                    ))}
                  </div>

                  {/* Price and Discount */}
                  <div className="price-box">
                    {prod.discount && (
                      <p className="discount-text">{prod.discount}% OFF</p>
                    )}
                    <p className="price-text">
                      ₹{prod.price}{" "}
                      {prod.originalPrice && (
                        <span className="mrp">MRP ₹{prod.originalPrice}</span>
                      )}
                    </p>
                  </div>

                  {/* Add to Cart */}
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(prod)}
                  >
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryProductDashboard;
