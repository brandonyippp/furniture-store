import React from "react";

import "./navBar.scss";

const NavBar = () => {
  return (
    <div id="nav-bar">
      <div className="nav-bar-inner-container">
        <div className="nav-bar-item-lhs">Currency</div>
        <div className="nav-bar-item-lhs">vanhighsun@gmail.com</div>
        <div className="nav-bar-item-lhs">(604) 717-1198</div>
      </div>
      <div className="nav-bar-inner-container">
        <div className="nav-bar-item-rhs">Store Locator</div>
        <div className="nav-bar-item-rhs">My Account</div>
        <div className="nav-bar-item-rhs">Socials</div>
      </div>
    </div>
  );
};

export default NavBar;
