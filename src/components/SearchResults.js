import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const SearchResults = ({ addToCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{query}"</h2>

      {filteredProducts.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              addToCart={addToCart}  // FIXED ✔
            />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
