import React, { Component } from "react";

class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <i className="fa fa-shopping-cart me-2" />
        <span className="shopping-cart-quantity">0</span>
        <a href="#">Giỏ hàng</a>
      </div>
    );
  }
}

export default ShoppingCart;
