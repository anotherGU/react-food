import React from "react";
import "./ListItems.css";

import ListItem from "./ListItem";

const ListItems = ({ sushi, onClickSushi }) => {
  return (
    <div className="items__list">
      <div className="container">
        <div className="items">
          <div className="items__row">
            {sushi.map((item) => (
              <div key={item.id} className="items__column">
                <ListItem onClickSushi={onClickSushi} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
