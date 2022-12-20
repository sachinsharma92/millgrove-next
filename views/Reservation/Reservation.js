/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { apiKey, baseUrl } from "../../utils/constants";
import styles from "./Reservation.module.scss";
import ReservationForm from "./ReservationForm";
import TreePrint from "./TreePrint";

const Reservation = () => {
  const [isBoxChecked, setIsBoxChecked] = useState(true);
  const { userToken } = useContext(AuthContext);

  const requestVisit = async () => {
    if (!isBoxChecked) return;
    try {
      const res = await axios.post(
        `${baseUrl}/client/request-visit`,
        {
          request_date: new Date().toISOString(),
        },
        {
          headers: {
            "rest-api-key": apiKey,
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("request visit res", res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgSection}>
        <div
          className={styles.reservationCard}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={styles.treeSection}>
            <TreePrint className={styles.treePrint} />
          </div>
          <ReservationForm
            isBoxChecked={isBoxChecked}
            setIsBoxChecked={setIsBoxChecked}
            requestVisit={requestVisit}
          />
        </div>
      </div>

      <div className={styles.theHomeSection}>
        <div className={styles.homeSectionStyle}>
          <div className={styles.groupSec}>
            <div className={styles.headSec}>
              <span className={styles.textNotera}>The</span>
              <div className={`${styles.titleCustom}`}>Homes</div>
            </div>

            {/* Hide on Desktop */}
            <button className={styles.discoverBtnMobile}>
              <img
                src="/images/discover.svg"
                alt="Three-D view of millgrove properties site"
                className={styles.imgStyle}
              />
            </button>
          </div>

          <div className={styles.assetsSec}>
            <button className={styles.discoverBtn}>
              <img
                src="/images/discover.svg"
                alt="Three-D view of millgrove properties site"
                className={styles.imgStyle}
              />
            </button>
            <div
              className={styles.imgBoxStyle}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home1.jpg"
                alt="Three-D view of millgrove properties site"
                className={styles.imgStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
