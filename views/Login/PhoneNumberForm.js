import React, { useState } from "react";
import Button from "../../components/Button";
import PhoneInput from "react-phone-number-input";
import { MILLGROVE_TREE } from "../../utils/assets";
import styles from "./Login.module.scss";
import "react-phone-number-input/style.css";
import axios from "axios";
import { apiKey, baseUrl } from "../../utils/constants";
import Link from "next/link";

const PhoneNumberForm = ({
  setIsEnteringPhoneNos,
  setIsEnteringOtp,
  setOtpToken,
  setIsRegistering,
  setIsLoggingIn,
}) => {
  const [phoneNos, setPhoneNos] = useState(null);
  const [error, setError] = useState({ errorOccured: false, msg: "" });

  const continueHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseUrl}/client/login`,
        {
          phone: phoneNos,
        },
        {
          headers: {
            "rest-api-key": apiKey,
          },
        }
      );
      // console.log(res);
      setOtpToken(res.data.data.otpToken);
      if (res.status === 200) {
        setIsEnteringPhoneNos(false);
        setIsEnteringOtp(true);
      } else {
        setError((prev) => ({
          ...prev,
          errorOccured: true,
          msg: "This number is not registered with us yet, ",
        }));
      }
    } catch (err) {
      console.log(err);
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        msg: "This number is not registered with us yet, ",
      }));
    }
  };

  const handleChange = (val) => {
    setPhoneNos(val);
    setError({ errorOccured: false, msg: "" });
  };

  const goToSignupPage = () => {
    setIsRegistering(true);
    setIsLoggingIn(false);
  };

  return (
    <div className={styles.mainWrapper}>
      <form onSubmit={continueHandler} className={styles.formWrapper}>
        <div className={styles.headSection}>
          <div className={styles.bgTree}>
            <MILLGROVE_TREE fillColor="#8a7f7f14" />
          </div>
          <div className={styles.headingWrapper}>
            <h3 className={styles.heading}>Enter Phone Number</h3>
          </div>
          <p className={styles.notRegisteredText}>
            Not registered yet? <a onClick={goToSignupPage}>Register here</a>
          </p>
        </div>
        <div className="input-relative-sec">
          <div className={styles.phoneNosWrapper}>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="IN"
              value={phoneNos}
              onChange={handleChange}
            />
          </div>
          <div className="error-sec">
            <p className={styles.errorText}>
              {error.errorOccured ? error.msg : ""}
              {error.errorOccured && (
                <span onClick={goToSignupPage}> register here</span>
              )}
            </p>
          </div>
        </div>
        <div className={styles.submitBtnWrapper}>
          <Button
            type="submit"
            clickhandler={(e) => continueHandler(e)}
            text={"Continue"}
            classname="button-style48"
          />
        </div>
      </form>
    </div>
  );
};

export default PhoneNumberForm;
