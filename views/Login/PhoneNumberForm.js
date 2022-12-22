import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { MILLGROVE_TREE } from "../../utils/assets";
import styles from "./Login.module.scss";
import { verifyPhoneNumber } from "./Login.helpers";
import { WarningOctagon } from "../../public/icons/icons";
import { checkNonNumericInput } from "../../utils/checkNonNumericInput";
import { isPhoneNosValid } from "../../utils/isPhoneNosValid";
import CountrySelect from "../../components/CountrySelect";

const PhoneNumberForm = ({
  setIsEnteringPhoneNos,
  setIsEnteringOtp,
  setOtpToken,
  setIsRegistering,
  setIsLoggingIn,
  phoneNos,
  setPhoneNos,
}) => {
  const [error, setError] = useState({ errorOccured: false, msg: "" });
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    dial_code: "91",
    code: "IN",
  });

  const continueHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await verifyPhoneNumber(
        `+${selectedCountry.dial_code}${phoneNos}`
      );
      if (res?.success) {
        setOtpToken(res.otpToken);
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
      <form className={styles.formWrapper}>
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
            <CountrySelect
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
            <input
              className={styles.phoneNumberInput}
              type={"text"}
              placeholder="Phone Number"
              value={phoneNos}
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={(e) => checkNonNumericInput(e)}
            />
            {error.errorOccured ? (
              <span className={styles.warningIconWrapper}>
                <WarningOctagon />
              </span>
            ) : null}
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
            isDisabled={!isPhoneNosValid(phoneNos, selectedCountry.dial_code)}
          />
        </div>
      </form>
    </div>
  );
};

export default PhoneNumberForm;
