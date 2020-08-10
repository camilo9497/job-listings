import React from "react";
import image from "../assets/bg-header-desktop.svg";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <img className="img-header" src={image} alt="" />
    </div>
  );
}
export default Header;
