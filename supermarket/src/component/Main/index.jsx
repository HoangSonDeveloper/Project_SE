import React, { useState } from "react";
import Categories from "./Categories";
import Heroes from "./Heroes";
import Product from "./Product";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Main.scss";
// import axios from "axios";
// import { Link, Route, Routes } from "react-router-dom";
// import ProductDetail from "../ProductDetailScreen";

const Main = ({ categories, products, advertisements }) => {
  const [pagination, setPagination] = useState(1);
  const handleMoreButtonClick = () => {
    setPagination(pagination + 1);
  };
  return (
    <div>
      <NavBar />
      <Heroes advertisements={advertisements} />
      <Categories categories={categories} />

      <Product
        products={products}
        pagination={pagination}
        onMoreButtonClick={handleMoreButtonClick}
      />
      <Footer />
    </div>
  );
};

export default Main;
