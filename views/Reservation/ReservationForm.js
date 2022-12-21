import React, { useContext } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import styles from "./Reservation.module.scss";
import { MILLGROVE_GRADIENT_LEAF } from "../../utils/assets";
import { AuthContext } from "../../context/AuthContext";

const Input = ({ placeholder, type = "text", value }) => {
  return (
    <input
      disabled
      type={type}
      className={styles.formInput}
      placeholder={placeholder}
      value={value}
    />
  );
};

const ReservationForm = ({ isBoxChecked, setIsBoxChecked, requestVisit }) => {
  const {
    userDetails: { name, email, phone },
  } = useContext(AuthContext);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formBg}>
        <div className={styles.zIndexStyle}>
          <div className={styles.formHeadingWrapper}>
            <h1 className={styles.formHeading}>
              Request <span>a</span> Visit
              <MILLGROVE_GRADIENT_LEAF className={styles.gradientLeaf} />
            </h1>
          </div>
          <form className={styles.formContainer}>
            <div className={styles.inputSection}>
              <div className={styles.formInputWrapper}>
                <Input value={name || ""} placeholder={"Name"} type="text" />
              </div>
              <div className={styles.formInputWrapper}>
                <Input value={phone || ""} placeholder={"Phone"} type="text" />
              </div>
              <div className={styles.formInputWrapper}>
                <Input value={email || ""} placeholder={"Email"} type="email" />
              </div>
            </div>
            <div className={styles.agreementCheck}>
              <Checkbox
                isBoxChecked={isBoxChecked}
                setIsBoxChecked={setIsBoxChecked}
              />
              <p>I accept the terms for processing my personal data</p>
            </div>
          </form>
          <button onClick={requestVisit} className={styles.requestAVisitBtn}>
            request a visit
          </button>
        </div>

        {/* Request Submitted Card here */}
        {/* <div className={styles.zIndexStyle} >
          <div className={styles.requestSubmited}>
            <h1 className={`${styles.formHeading} ${styles.requestHeading}`}>
              <MILLGROVE_GRADIENT_LEAF className={styles.gradientLeaf} />
              Request submitted
            </h1>
            <p className={`${styles.requestDescription}`}>
              Your visit request has been submitted, you’ll soon receive an email with the necessary next steps. Hope to see you soon.
            </p>
          </div>
          <div className={`${styles.millgroveText}`}>Millgrove</div>
        </div> */}
      </div>
    </div>
  );
};

export default ReservationForm;
