/* eslint-disable @next/next/no-img-element */
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerHomepage}>
      <div className={styles.footerWrapper}>
        <div className={styles.themeText}>
          <div className={styles.themeText2}>
            <img src="/images/millglove-footer-bold.svg" className={styles.imgbold} alt="" />
            <img src="/images/millglove-footer.svg" alt="" />
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
