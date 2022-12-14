import Image from "next/image";
import styles from "./ThreeDView.module.scss";
const ThreeDView = () => {
  return (
    <div className={styles.wrapper}>
      <div className="second-fold-img"></div>
      <div className={styles.textWrapperDesktop}>
        <div className={styles.heading}>
          <h2 className={styles.first}>
            Make Memories<h2 className={styles.second}>On</h2>
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
          <h2 className={styles.third}>Your own land</h2>
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

      <div className={styles.threeDView}>
        <Image
          src="/images/three-d.png"
          alt="Three-D view of millgrove properties site"
          width="100%"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default ThreeDView;
