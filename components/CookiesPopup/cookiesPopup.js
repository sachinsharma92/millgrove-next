import React from "react";
import { COOKIES_ARROW, COOKIES_CROSS } from "../../utils/assets";

function CookiesPopup(props) {
  return (
    <div className="mg-cookies-popup">
      <div onClick={props.closeCookiesPopup} className={"mg-cookies-cross"}>
        <COOKIES_CROSS />
      </div>
      <div className="mg-cookies-heading">Cookies</div>
      <div className="mg-cookies-subtext">
        This website uses cookies to ensure you get the best experience on our
        website. <span>More info</span>
      </div>
      <div className="mg-cookies-btns">
        <div className="mg-cookies-understand">
          <COOKIES_ARROW stroke={"#5C5043"} />I understand
          <COOKIES_ARROW
            stroke={"#5C5043"}
            style={{ transform: "rotateZ(180deg)" }}
          />
        </div>
        <div className="mg-cookies-tweak">
          <COOKIES_ARROW stroke={"#F1EFE5"} />
          Tweak Preferences
          <COOKIES_ARROW
            stroke={"#F1EFE5"}
            style={{ transform: "rotateZ(180deg)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CookiesPopup;
