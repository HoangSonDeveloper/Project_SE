import React, { Component } from "react";
import ProductCard from "../../Product/ProductCard";
import axios from "axios";

class ProductContainer extends Component {
  state = {
    products: [],
    pagination: 1,
  };

  async componentDidMount() {
    const { categoryID } = this.props;
    try {
      const { data } = await axios.get(
        `https://617c2cb7d842cf001711c290.mockapi.io/Categories/${categoryID}/Product`
      );
      this.setState({ products: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { products } = this.state;
    return (
      <div className="product-container">
        <div className="grid-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductContainer;
