import React, { Component } from "react";
import Carousel from "./Carousel/index";

class Heroes extends Component {
  render() {
    return (
      <div className="hero-container">
        <Carousel />
        <div className="hero-side-banner"></div>
      </div>
    );
  }
}

export default Heroes;
