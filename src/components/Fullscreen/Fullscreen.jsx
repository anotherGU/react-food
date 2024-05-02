import React from "react";
import "./Fullscreen.css";
import Header from "../Header/Header";
import FullscreenContent from "../FullscreenContent/FullscreenContent";

const Fullscreen = () => {
  return (
    <div className="fullscreen">
      <div className="container">
        <Header />
        <FullscreenContent />
      </div>
    </div>
  );
};

export default Fullscreen;
