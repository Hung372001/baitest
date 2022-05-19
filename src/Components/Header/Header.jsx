import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__main">
        <h1 className="header__main__title">Food</h1>
        <div className="header__main__nav">
          <ul className="header__nav_left">
            <li className="header__nav_left_item">News</li>
            <li className="header__nav_left_item">Delivery</li>
            <li className="header__nav_left_item">Contact</li>
            <li className="header__nav_left_item">Feedback</li>
          </ul>
          <ul className="header__nav_right">
            <li className="header__nav_right_item">Sign up</li>
            <li className="header__nav_right_item">Sign in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
