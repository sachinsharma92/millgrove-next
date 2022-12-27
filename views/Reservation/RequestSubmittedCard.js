import React from "react";
import { MILLGROVE_GRADIENT_LEAF } from "../../utils/assets";
import styles from "./Reservation.module.scss";

const RequestSubmittedCard = () => {
  return (
    <div className={styles.zIndexStyle}>
      <div className={styles.requestSubmited}>
        <h1 className={`${styles.formHeading} ${styles.requestHeading}`}>
          <MILLGROVE_GRADIENT_LEAF className={styles.gradientLeaf} />
          Request submitted
        </h1>
        <p className={`${styles.requestDescription}`}>
          Your visit request has been submitted, you’ll soon receive an email
          with the necessary next steps. Hope to see you soon.
        </p>
      </div>
      <div className={`${styles.millgroveText}`}>Millgrove</div>
    </div>
  );
};

export default RequestSubmittedCard;
