import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { RESERVE_VISIT } from "../../utils/assets";
import { apiKey, baseUrl } from "../../utils/constants";
import styles from "./Reservation.module.scss";
import ReservationForm from "./ReservationForm";
import TreePrint from "./TreePrint";

const Reservation = () => {
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  // const { userToken } = useContext(AuthContext);

  const requestVisit = async () => {
    // if (!isBoxChecked) return;
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
    <div className={styles.wrapper} data-scroll-section>
      <div>
        <div className={styles.verticalDash}></div>
        <div className={styles.reservationCard}>
          <div className={styles.treeSection}>
            <TreePrint className={styles.treePrint} />
          </div>
          <ReservationForm
            isBoxChecked={isBoxChecked}
            setIsBoxChecked={setIsBoxChecked}
          />
          <div onClick={requestVisit}>
            <RESERVE_VISIT className={styles.reserveVisit} />
          </div>
        </div>
        <div className={styles.verticalDash}></div>
      </div>
    </div>
  );
};

export default Reservation;
