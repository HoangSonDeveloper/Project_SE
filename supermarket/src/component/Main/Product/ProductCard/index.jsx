import React from "react";
import "../Product.scss";

const promoStyle = (promo) => {
  return promo > 0 ? { display: "inline-block " } : { display: "none" };
};
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-card-img"
        src={product.image}
        alt="product-thumbnail"
      />
      <div className="product-card-content">
        <div className="product-card-title">{product.name}</div>
        <div style={promoStyle(product.promo)} className="product-card-promo">
          {`Giảm ${product.promo}%`}
        </div>
        <div className="product-card-price">
          <span className="product-card-price-sign">₫</span>
          <span className="product-card-price-number">{product.price}</span>
        </div>
      </div>
      <div className="product-card-footer">Xem sản phẩm</div>
    </div>
  );
};

export default ProductCard;
