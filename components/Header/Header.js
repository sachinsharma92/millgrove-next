import React from "react";
import { MILLGROVE_LOGO } from "../../utils/assets";
import styles from "./Header.module.scss";

const Header = ({ children, defaultElements = true }) => {
  return (
    <header className={styles.header}>
      <div className={styles.companyLogo}>
        <MILLGROVE_LOGO />
      </div>
      <div className={styles.reraDetails}>
        <a
          className="siteUrl"
          href={"https://haryanarera.gov.in/"}
          target="#blank"
        >
          www.haryanarera.gov.in
        </a>
        <div>HRERA2020A0009</div>
      </div>
    </header>
  );
};

export default Header;
