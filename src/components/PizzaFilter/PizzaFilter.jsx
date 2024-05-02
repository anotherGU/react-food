import React from "react";
import "./PizzaFilter.css";

const pizzaFilter = ["Meat", "Vegan", "Spicy"];

const PizzaFilter = ({ activeCategory, onClickCategory }) => {
  return (
    <div>
      <ul className="categories__filter">
        <li
          className={
            activeCategory === null
              ? "categories__filter__item__active"
              : "categories__filter__item"
          }
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {pizzaFilter.map((item, index) => (
          <li
            key={item}
            className={
              activeCategory === index
                ? "categories__filter__item__active"
                : "categories__filter__item"
            }
            onClick={() => onClickCategory(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaFilter
