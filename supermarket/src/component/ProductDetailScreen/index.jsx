import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Main/Footer";
import NavBar from "../Main/NavBar";
import Counter from "./Couter";

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  let { id } = useParams();
  const data = product[id];
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <div>
      <NavBar />
      <div>
        <div className="product-detail-container">
          <img
            src={data.image}
            alt="product-thumb"
            className="product-detail-img"
          />
          <div className="product-detail-info">
            <h4 className="product-detail-name">{data.name}</h4>
            <div className="product-detail-price">
              <p>Số lượng: {data.quantity}</p>
              <p className="product-detail-price-text">
                {data.price}
                <span className="product-detail-price-sign">₫</span>
              </p>
            </div>
            <div className="product-detail-shipment">
              <img
                className="product-detail-shipment-logo"
                src="https://drive.google.com/uc?export=view&id=1hpR4OxdPvM4fFi5sdy059wfYP286iRyL"
                alt="logo"
              />
              <div className="product-detail-shipment-title">
                <p className="product-detail-shipment-freeship">FREESHIP - </p>
                <p className="product-detail-shipment-text">
                  Miễn phí vận chuyển toàn quốc, lên đến 50.000đ
                </p>
              </div>
            </div>
            <div className="product-detail-quantity">
              Số lượng:{" "}
              <Counter
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
                quantity={quantity}
              />
            </div>
            <div className="product-detail-button">
              <button className="product-detail-button-buy">Mua ngay</button>
              <button className="product-detail-button-add">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        <div className="product-detail-description">
          <div className="product-detail-manu">
            <h2 className="product-detail-manu-title">Thông tin sản phẩm</h2>
            <div className="product-detail-manu-info">
              <p className="product-detail-manu-info-cate">
                Danh mục: {data.category[0].name}
              </p>
              <p>Xuất xứ: {data.manufactorer}</p>
            </div>
          </div>
          <div>
            <h5 className="product-detail-description-title">Mô tả sản phẩm</h5>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
