/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { useEffect } from "react";
import styles from "./ThreeDView.module.scss";
const ThreeDView = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-memories", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 0.4,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#makeMemories',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])
  return (
    <div className={styles.wrapper}>
      <div className="second-fold-img" data-aos="fade-up"
        data-aos-duration="1000"></div>
      <div id="makeMemories" className={styles.textWrapperDesktop}>
        <div className={`${styles.heading} animation-block`}>
          <h2 className={`${styles.first} animation-memories`}>
            Make Memories<h2 className={styles.second}>On</h2>
          </h2>
        </div>
        <div className={styles.flexSection}>
          <div className="animation-block">
            <p className={`${styles.description} animation-memories`}>
              Millgrove extends an unparalleled offering to a select few - a rare
              chance to own a 1000 square yard plot inclusive of an exquisite
              independent home. It is ultra-low-density by design with only a
              limited number of single dwelling plots thoughtfully arranged over
              23-acres.
            </p>
          </div>
          <div className="animation-block">
            <h2 className={`${styles.third} animation-memories`}>Your own land</h2>
          </div>
        </div>
      </div>

      <div className={styles.textWrapperMobile}>
        <div className={styles.heading}>
          <h2 className={styles.first}>
            Make Memories
            <div className={styles.second}>On</div>
            Your own land
          </h2>
        </div>
        <div className={styles.flexSection}>
          <p className={styles.description}>
            Millgrove extends an unparalleled offering to a select few - a rare
            chance to own a 1000 square yard plot inclusive of an exquisite
            independent home. It is ultra-low-density by design with only a
            limited number of single dwelling plots thoughtfully arranged over
            23-acres.
          </p>
        </div>
      </div>

      <div className={`${styles.threeDView}`} data-aos="fade-up"
        data-aos-duration="1000">
        <img
          src="/images/threed.png"
          alt="Three-D view of millgrove properties site"
          className={styles.imgStyle}
        />
      </div>
    </div>
  );
};

export default ThreeDView;
