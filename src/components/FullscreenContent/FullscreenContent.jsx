import React from "react";
import "./FullscreenContent.css";

const FullscreenContent = () => {
  return (
    <div className="fullscreen__content">
      <div className="fullscreen__row">
        <div className="fullscreen__text">
          <p className="fullscreen__text__heading">
            REAL FOOD <br /> NEEDS GOOD
          </p>
          <p className="fullscreen__text__word">MATERIAL</p>
          <p className="fullscreen__text__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Modi, ex earum! Ab quas, culpa illo quos ipsum rem eligendi dolor
            <br />
            doloremque assumenda.
          </p>
        </div>
        <div className="fullscreen__img">
          <img
            className="fullscreen__image"
            src="https://ecosushi.com.ua/wp-content/themes/ecosushi/assets/img/empty-cart.svg"
            alt="content__img"
          />
        </div>
      </div>
      <p className="explore__link">EXPLORE NOW </p>
    </div>
  );
};

export default FullscreenContent;
