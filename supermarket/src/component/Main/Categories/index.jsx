import React, { Component } from "react";
import CategoryCard from "../Categories/CategoryCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Categories = ({ categories, history }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    responsive: [768, 320],
  };
  function handleCardClicked() {
    history.push("/");
    console.log("Pushed");
  }

  return (
    <div className="categories-container">
      <Slider {...settings}>
        {categories.map((cate) => (
          <div key={cate.id}>
            <Link to={`/Categories/${cate.id}/Product`}>
              <CategoryCard
                onClick={handleCardClicked}
                title={cate.title}
                img={cate.img}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
