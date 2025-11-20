import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      addToCart(product);
    } else {
      console.warn("addToCart was not passed to ProductCard");
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">
          ₹{product.price}{" "}
          <span className="original">₹{product.originalPrice}</span>
        </p>
        <p className="category">{product.category}</p>
        <p className="quantity">{product.quantity}</p>
        <p className="delivery">🚚 {product.deliveryTime}</p>
        <p className="rating">⭐ {product.rating}</p>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
