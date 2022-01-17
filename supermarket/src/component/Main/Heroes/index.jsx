import React from "react";
import Carousel from "./Carousel/index";

const Heroes = ({ advertisements }) => {
  const banner =
    "https://drive.google.com/uc?export=view&id=1XueoVTVlI2aV9LM6AdI92N1z1Shl-Ip9";

  return (
    <div className="hero-container">
      <Carousel advertisements={advertisements} />
      <div className="hero-side-banner">
        <img src={banner} alt="banner-img" />
      </div>
    </div>
  );
};

export default Heroes;
