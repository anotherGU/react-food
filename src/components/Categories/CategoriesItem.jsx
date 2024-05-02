import React from "react";
import "./CategoriesItem.css";

const CategoriesItem = ({ item }) => {
  return (
    <div className="categories__card">
      <div className="categories__img">
        <img
          src={item.img}
          alt="category__img"
          height={200}
        />
      </div>
    </div>
  );
};

export default CategoriesItem;
