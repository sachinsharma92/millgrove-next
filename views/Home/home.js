import React from "react";

// // Styles
// import "./home.scss";

// Assets
import { MILLGROVE_LOGO_BIG, MILLGROVE_TREE } from "../../utils/assets";

function Home(props) {
  return (
    <div className="millgrove-home">
      <span className="millgrove-title">
        <MILLGROVE_LOGO_BIG
          style={{ height: "89", width: "665", color: "#F4F1EC" }}
          className="millgrove-logo"
        />
      </span>
      <div className="millgrove-tree">
        <MILLGROVE_TREE />
      </div>
      <div className="millgrove-home-loading">
        <span>LOADING</span>
      </div>
      <div className="millgrove-home-loading-bar">
        <div className="millgrove-home-loading-bar-fill"></div>
      </div>
    </div>
  );
}

export default Home;
