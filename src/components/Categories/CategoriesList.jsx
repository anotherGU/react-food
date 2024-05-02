import { useState } from "react";
import "./CategoriesList.css";
import CategoriesItem from "./CategoriesItem";

import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [categories] = useState([
    {
      name: "sushi",
      img: "https://static-00.iconduck.com/assets.00/sushi-emoji-2048x1736-low0sdb8.png",
    },
    {
      name: "pizza",
      img: "https://images.emojiterra.com/google/android-12l/512px/1f355.png",
    },
    {
      name: "hamburgers",
      img: "https://static-00.iconduck.com/assets.00/hamburger-emoji-1024x1006-ne77ko91.png",
    },
    {
      name: "snacks",
      img: "https://cdn-icons-png.flaticon.com/512/2137/2137628.png",
    },
  ]);

  return (
    <div className="categories">
      <div className="container">
        <p className="categories__heading">
          Choose <strong>category</strong>
        </p>
        <div className="categories__row">
          {categories.map((item) => (
            <div key={item.name} className="categories__column">
              <Link className="img__link" to={`/${item.name}`}>
                <CategoriesItem item={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
