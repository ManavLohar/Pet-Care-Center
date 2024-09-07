import React from "react";
import style from "./Header.module.css";
import logo from "../assets/logo.png";
import { useState } from "react";
// import socialMediaLogo from "../assets/socialmedia_icon.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const triggeredClick = () => {
    setClick(false);
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={style.navBtn}>
        <ul
          className={style.navLists}
          style={{ height: click ? "22rem" : "0" }}
        >
          <li onClick={triggeredClick}>
            <a href="#Home">Home</a>
          </li>
          <li onClick={triggeredClick}>
            <a href="#AboutUs">About Us</a>
          </li>
          <li onClick={triggeredClick}>
            <a href="#Services">Services</a>
          </li>
          <li onClick={triggeredClick}>
            <a href="#Features">Features</a>
          </li>
          <li onClick={triggeredClick}>
            <a href="#Gallery">Gallery</a>
          </li>
          <li onClick={triggeredClick}>
            <a href="#Activities">Activities</a>
          </li>
          <button>Buy Now</button>
        </ul>
        <div onClick={handleClick} className={style.menu}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
