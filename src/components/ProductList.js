import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((item, index) => (
        <ProductCard product={item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
