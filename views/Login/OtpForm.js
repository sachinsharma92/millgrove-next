import axios from "axios";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import React, { useContext, useRef, useState } from "react";
import OtpInput from "react18-input-otp";
import { MILLGROVE_TREE } from "../../utils/assets";
import styles from "./Login.module.scss";
import Timer from "./Timer";
import { useRouter } from "next/router";
import Link from "next/link";
import { verifyPhoneNumber } from "./Login.helpers";

const OtpForm = ({ setIsLoggingIn, otpToken, phoneNos, setOtpToken }) => {
  const [otp, setOtp] = useState(null);
  const [seconds, setSeconds] = useState(60);
  const otpWrapperRef = useRef();
  const { setIsLoggedIn, loginWithCredentials } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const res = await loginWithCredentials(otp, otpToken);
      if (res) {
        router.push("/home");
        setIsLoggingIn(false);
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const resendOtp = async (e) => {
    if (seconds > 0) return;
    try {
      const res = await verifyPhoneNumber({
        e,
        phoneNos,
      });
      if (res?.success) {
        setOtpToken(res.otpToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.otpMainWrapper}>
      <div className={styles.bgTree}>
        <MILLGROVE_TREE style={{ height: "200" }} fillColor="#8a7f7f14" />
      </div>
      <div className={styles.otpFormWrapper}>
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>Enter One time password</h3>
          <p className={styles.notRegisteredText}>
            Not registered yet? <Link href="">Register here</Link>
          </p>
        </div>
        <div ref={otpWrapperRef} className={styles.otpWrapper}>
          <OtpInput
            inputStyle={styles.otpInput}
            value={otp}
            shouldAutoFocus
            onChange={handleChange}
            numInputs={6}
            isInputNum={false}
            placeholder=""
            separator={false}
          />
        </div>
        <p className={styles.resendMsg}>
          <span onClick={resendOtp} className={styles.resend}>
            Click here
          </span>{" "}
          to receive a new code{" "}
          <Timer seconds={seconds} setSeconds={setSeconds} label={"in"} />
        </p>
        <div className={styles.submitBtnWrapper}>
          <Button
            type="submit"
            clickhandler={() => otp?.length === 6 && handleSubmit()}
            text={"Continue"}
            isDisabled={otp?.length === 6 ? false : true}
            classname={`${styles.otpBtnStyle} button-style48`}
          />
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
