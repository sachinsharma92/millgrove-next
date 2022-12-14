import React, { useState } from "react";
import Layout from "../../components/Layout";
import PhoneNumberForm from "./PhoneNumberForm";
import OtpForm from "./OtpForm";
import styles from "./Login.module.scss";
import Header from "../../components/Header";

const Login = ({ setIsLoggingIn, setIsRegistering }) => {
  const [isEnteringPhoneNos, setIsEnteringPhoneNos] = useState(true);
  const [isEnteringOtp, setIsEnteringOtp] = useState(false);
  const [otpToken, setOtpToken] = useState(null);
  const [phoneNos, setPhoneNos] = useState(null);

  return (
    <Layout layoutStyle="login-page-style">
      <div className={`${styles.loginMainContainer} login-mobile`}>
        <Header />

        {isEnteringPhoneNos && (
          <PhoneNumberForm
            setIsEnteringPhoneNos={setIsEnteringPhoneNos}
            setIsEnteringOtp={setIsEnteringOtp}
            setOtpToken={setOtpToken}
            setIsRegistering={setIsRegistering}
            setIsLoggingIn={setIsLoggingIn}
            phoneNos={phoneNos}
            setPhoneNos={setPhoneNos}
          />
        )}
        {isEnteringOtp && (
          <OtpForm
            setIsLoggingIn={setIsLoggingIn}
            otpToken={otpToken}
            setOtpToken={setOtpToken}
            phoneNos={phoneNos}
          />
        )}
      </div>
    </Layout>
  );
};

export default Login;
