import React from "react";
import Slide from "../Slider/Slider";
import "./Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menu_title">
        <h3 className="title"> Choose your ration </h3>
        <span className=" desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </span>
      </div>

      <ul className="menu__choose">
        <li className="menu__choose_item">All </li>
        <li className="menu__choose_item">Vegetarian</li>
        <li className="menu__choose_item">Gluten Free</li>
        <li className="menu__choose_item">Sugar Free</li>
        <li className="menu__choose_item">Drink</li>
      </ul>
      <div className="slider">
        <Slide />
      </div>
    </div>
  );
};

export default Menu;
