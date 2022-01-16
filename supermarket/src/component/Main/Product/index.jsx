import React, { Component, useState } from "react";
import ProductCard from "./ProductCard";
import { filterProduct } from "../../../services/filterProduct";

const Product = ({ products, pagination, onMoreButtonClick }) => {
  const filteredProducts = filterProduct(products, pagination);

  console.log(filterProduct.length);
  return (
    <div className="product-container">
      <div className="product-container-header">
        <div className="product-container-header-title">sản phẩm của ngày</div>
        <a className="product-container-header-more" href="#">
          Xem tất cả
        </a>
      </div>
      <div className="product-container grid-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <button onClick={onMoreButtonClick} className="btn product-container-btn">
        Xem Thêm
      </button>
    </div>
  );
};

export default Product;
