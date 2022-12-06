import React from "react";

// Styles
import "./menu.scss";

// Assets
import {
  MILLGROVE_MENU_CROSS,
  MILLGROVE_MENU_LOGO,
  MILLGROVE_MENU_TREE,
} from "utils/assets";
import tempImage from "assets/images/temp-menu-img.png";

function Menu(props) {
  return (
    <div className="millgrove-menu">
      <div className="millgrove-menu-header">
        <div></div>
        <MILLGROVE_MENU_LOGO />
        <div onClick={props.closeMenu}>
          <MILLGROVE_MENU_CROSS
            style={{ cursor: "pointer", zIndex: 2, position: "relative" }}
          />
        </div>
      </div>
      <MILLGROVE_MENU_TREE className={"millgrove-menu-tree"} />
      <div className="millgrove-menu-options">
        <div>HOMES</div>
        <div>GROUNDS</div>
        <div>CONFORTS</div>
        <div>LOCATION</div>
        <div>STORY</div>
      </div>
      <div className="millgrove-menu-images-div">
        <div className="millgrove-menu-image">
          <img src={tempImage} alt="temp-img" />
        </div>
      </div>
      <div className="millgrove-menu-footer">
        <span>Privacy policy</span>
        <span>Cookies policy</span>
        <span>©MILLGROVE, 2022.</span>
      </div>
    </div>
  );
}

export default Menu;
