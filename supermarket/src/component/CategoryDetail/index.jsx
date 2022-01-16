import React, { Component } from "react";
import ProductContainer from "./ProductContainer";
import "./CategoryDetail.scss";

class CategoryDetail extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <ProductContainer categoryID={match.params.id} />
      </div>
    );
  }
}

export default CategoryDetail;
