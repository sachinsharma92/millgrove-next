import Link from "next/link";
import React from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children, layoutStyle, footerHide }) => {
  return (
    <div className={`${styles.wrapper} ${layoutStyle}`}>
      <div className={styles.mainContentWrapper}>
        {/* <Header /> */}
        <div className={styles.childrenWrapper}>{children}</div>
      </div>

      {!footerHide && <footer className={styles.footerCustom}>
        <div className="left-footer-links">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Cookies policy</Link>
        </div>
        <div className={styles.rightFooter}>
          <a
            className="siteUrl"
            href={"https://haryanarera.gov.in/"}
            target="#blank"
          >
            www.haryanarera.gov.in
          </a>
          <span>HRERA2020A0009</span>
        </div>
      </footer>}
    </div>
  );
};

export default Layout;
