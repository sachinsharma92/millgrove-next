/* eslint-disable @next/next/no-img-element */
import styles from "./Footer.module.scss";
import Link from "next/link";
import { MillgroveLogo } from "../../utils/millgrove";
import { useEffect } from "react";
import gsap from "gsap";

const Footer = () => {

  return (
    <div className={styles.footerHomepage}>
      <div className={styles.footerLine}></div>
      <div className={styles.footerWrapper}>
        <div className={styles.themeText}>
          <div className={styles.themeText2}>
            <MillgroveLogo className="svgFill" />
          </div>
        </div>
        <div className={styles.footerLinksWrapper}>
          <div className={styles.footerLinks}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Cookies policy</Link>
          </div>
          {/* <p>©MILLGROVE, 2022. 28.6063° N, 77.3856° E</p> */}
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
