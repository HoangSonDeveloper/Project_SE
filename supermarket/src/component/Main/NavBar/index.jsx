import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SeachBar";
import ShoppingCart from "./ShoppingCart";

const logo =
  "https://drive.google.com/uc?export=view&id=1hpR4OxdPvM4fFi5sdy059wfYP286iRyL";

class NavBar extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="nav-bar-wrapper">
        <nav className="nav-bar">
          <div className="nav-bar-brand">
            <a href="#">
              <img className="nav-bar-logo" src={logo} alt="Logo-mall" />
            </a>
          </div>
          <SearchBar />
          <div className="nav-bar-side">
            <div className="nav-bar-user">
              <i className="fa fa-user me-2" />
              <Link to="/login">Đăng nhập</Link>
              <span className="me-1">|</span>
              <Link to="/register">Đăng ký</Link>
            </div>
            <Link to="/cart">
              <ShoppingCart quantity={cart} />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
