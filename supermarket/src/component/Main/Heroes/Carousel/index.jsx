import React, { Component } from "react";
import "../Heroes.scss";

class Carousel extends Component {
  state = {
    color: ["red", "green", "blue", "yellow"],
  };
  render() {
    return (
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {this.state.color.map((c, index) => (
            <div
              className={
                index === 0 ? "carousel-item active" : "carousel-item "
              }
              key={index}
              style={{ backgroundColor: `${c}` }}
            ></div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
