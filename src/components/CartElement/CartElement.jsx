import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import "./CartElement.css";

const CartElement = ({
  item,
  totalPrice,
  totalCount,
  onRemove,
  onPlus,
  onMinus,
}) => {
  const cartDelete = () => {
    onRemove(item.id);
  };

  const cartPlus = () => {
    onPlus(item.id);
  };

  const cartMinus = () => {
    onMinus(item.id);
  };

  return (
    <div className="cart__element">
      <div className="cart__element__row">
        <div className="cart__element__img">
          <img src={item.image} height={150} width={150} alt="img" />
        </div>
        <p className="cart__element__title">{item.name}</p>
        <p className="cart__element__price">Price: ${item.price % 1 === 0 ? item.price.toFixed(0) : item.price.toFixed(2)}</p>

        <div className="cart__element__quantity">
          Amount: <FaMinus className="cart__element__minus" onClick={cartMinus} />
          {totalCount}
          <FaPlus className="cart__element__plus" onClick={cartPlus} />
        </div>
        <p className="cart__element__total__price">
          Total Price: $
          {totalPrice % 1 === 0 ? totalPrice.toFixed(0) : totalPrice.toFixed(2)}
        </p>
        <MdDelete onClick={cartDelete} className="cart__element__delete" />
      </div>
    </div>
  );
};

export default CartElement;
