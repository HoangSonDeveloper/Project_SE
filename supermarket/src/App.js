import "./App.css";
import LoginScreen from "./component/LoginScreen";
import RegisterScreen from "./component/RegisterScreen";
import ResetPassScreen from "./component/ResetPassScreen";
// import CategoryDetail from "./component/CategoryDetail";
// import Categories from "./component/Categories";
import Main from "./component/Main";
// import NavBar from "./component/Main/NavBar";
// import Footer from "./component/Main/Footer";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./component/ProductDetailScreen";
import axios from "axios";
import CartScreen from "./component/CartScreen";

const userContext = React.createContext();

class App extends Component {
  state = {
    user: "",
    categories: [],
    products: [],
    advertisements: [
      "https://drive.google.com/uc?export=view&id=1395psMvUlzwV7RLxw3d05VZzVLVPcpcK",
      "https://drive.google.com/uc?export=view&id=10DF8PBsZ8ussBI3uqJD0Bl6_n5zqoX1o",
      "https://drive.google.com/uc?export=view&id=1IDsKIYRUS6kJJT6IlgfmvlNlN3UwfidN",
    ],
  };

  async getCategories() {
    try {
      const { data } = await axios.get(
        "https://61e407f6fbee6800175eb18d.mockapi.io/categories"
      );
      this.setState({ categories: data });
    } catch (error) {
      console.log(error);
    }
  }
  async getProducts() {
    try {
      const { data } = await axios.get(
        "https://61e407f6fbee6800175eb18d.mockapi.io/products"
      );
      this.setState({ products: data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }
  render() {
    const { categories, products, advertisements } = this.state;
    return (
      <userContext.Provider value={{ login: false }}>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/forgot-password" element={<ResetPassScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            {/* <Route path="/cart" element={<RegisterScreen />} /> */}
            <Route
              path="/product/:id"
              element={<ProductDetail product={products} />}
            />
            <Route
              exact
              path="/"
              element={
                <Main
                  products={products}
                  categories={categories}
                  advertisements={advertisements}
                />
              }
            />
          </Routes>
        </div>
      </userContext.Provider>
    );
  }
}

export default App;
