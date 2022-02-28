import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import SearchIcon from "@mui/icons-material/Search";

import "./header.scss";

const Header = () => {
  return (
    <div id="header-container">
      <div className="header-item">High Sun Mattress</div>
      <div className="header-inner-container">
        <div className="header-dropdown">
          <div>HOME</div>
          <KeyboardArrowDownIcon className="down-arrow" />
        </div>
        <div className="header-dropdown">
          <div>SHOP</div>
          <KeyboardArrowDownIcon className="down-arrow" />
        </div>
        <div className="header-dropdown">
          <div>CUSTOM</div>
          <KeyboardArrowDownIcon className="down-arrow" />
        </div>
        <div className="header-dropdown">
          <div>UPDATES</div>
          <KeyboardArrowDownIcon className="down-arrow" />
        </div>
      </div>
      <div className="header-item">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Header;
