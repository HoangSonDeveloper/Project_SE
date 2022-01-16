import React, { Component } from "react";
import Categories from "./Categories";
import Heroes from "./Heroes";
import Product from "./Product";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Main.scss";
import axios from "axios";

class Main extends Component {
  state = {
    categories: [],
    products: [],
    pagination: 1,
  };

  async getCategories() {
    try {
      const { data } = await axios.get("https://localhost:3000/category");
      this.setState({ categories: data });
    } catch (error) {
      console.log(error);
    }
  }
  async getProducts() {
    try {
      const { data } = await axios.get("https://localhost:3000/products");
      this.setState({ products: data });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  componentWillUnmount() {}

  handleMoreButtonClick = () => {
    const count = this.state.pagination;
    this.setState({ pagination: count + 1 });
  };
  render() {
    const { categories, products, pagination } = this.state;
    return (
      <div>
        <NavBar />
        <Heroes />
        <Categories categories={categories} />
        <Product
          products={products}
          pagination={pagination}
          onMoreButtonClick={this.handleMoreButtonClick}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
