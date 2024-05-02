import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <Link to="/">
            <div className="header__logo">
              <img
                src="https://static-00.iconduck.com/assets.00/sushi-emoji-2048x2048-5itsruw8.png"
                width={40}
                height={40}
                alt="logo__img"
              ></img>
              <p>FOOD</p>
            </div>
          </Link>
          <Link className="header__link" to="/cart">
            <div className="header__cart">
              <IoCartOutline className="cart__ico" />
              <div className="header__cart__count">{!cart.totalCount ? "0": cart.totalCount}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
