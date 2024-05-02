import React from "react";
import "./ListItem.css";
import { useSelector } from "react-redux";

import { IoCartOutline } from "react-icons/io5";

const ListItem = ({ item, onClickSushi }) => {
  const cart = useSelector(({ cart }) => cart);

  const onAddSushi = () => {
    const obj = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    };

    onClickSushi(obj);
    console.log(cart.items);
  };

  return (
    <div className="items__card">
      <div className="card__top">
        <img
          className="card__image"
          src={item.image}
          height={250}
          alt="item__img"
        />
      </div>
      <div className="card__body">
        <p className="card__title">{item.name}</p>
        <div className="card__body__row">
          <p className="card__price">{item.price}$</p>
          <div className="card__button">
            <div onClick={onAddSushi} className="card__button__wrapper">
              <IoCartOutline className="button__ico" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
