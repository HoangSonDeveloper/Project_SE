import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="category-card-background">
      <div className="category-card">
        <div className="category-card-img">
          <img src={props.img} alt="card-thumbnail" />
        </div>
        <div className="category-card-title">{props.title}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
