import React, { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Layout from "../../components/Layout";
import PhoneInput from "react-phone-number-input";
import { MILLGROVE_TREE } from "../../utils/assets";
import styles from "./Signup.module.scss";
import axios from "axios";
import { apiKey, baseUrl } from "../../utils/constants";
import Header from "../../components/Header";
// import en from "react-phone-number-input/locale/en";
// import { getCountries, getCountryCallingCode } from "react-phone-number-input";

const ERROR_MSG = "This is a required field, can’t be left empty";

const Signup = ({
  isRegistering,
  setIsRegistering,
  isRegisterationSuccessfull,
  setIsRegisterationSuccessfull,
}) => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const [error, setError] = useState({
    errorOccured: false,
    nameError: "",
    phoneError: "",
    emailError: "",
  });

  const isInvalidPhoneNumber = (str) => {
    if (str.startsWith("+91") && str.slice(3).length !== 10) return true;
    return false;
  };
  const isAnyFieldEmpty = () => {
    if (!userInfo.name) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        nameError: ERROR_MSG,
      }));
      // return true;
    }
    if (!userInfo.phone) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        phoneError: ERROR_MSG,
      }));
      // return true;
    }
    if (!userInfo.email) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        emailError: ERROR_MSG,
      }));
      // return true;
    }
    if (isInvalidPhoneNumber(userInfo.phone)) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        phoneError: "Phone number must be 10 digits long.",
      }));
      // return true;
    }
    if (
      Object.values(userInfo).includes("") ||
      isInvalidPhoneNumber(userInfo.phone)
    ) {
      return true;
    }
    if (!isBoxChecked) return true;
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAnyFieldEmpty()) return;
    console.log("resetting error");
    setError((prev) => ({
      ...prev,
      errorOccured: false,
      nameError: "",
      phoneError: "",
      emailError: "",
    }));
    const res = await axios.post(
      `${baseUrl}/client/register`,
      {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
      },
      {
        headers: {
          "rest-api-key": apiKey,
        },
      }
    );
    if (res?.status === 200) {
      setIsRegistering(false);
      setIsRegisterationSuccessfull(true);
    }
  };

  const updateUserInfo = (field, e) => {
    setError((prev) => ({
      ...prev,
      [`${field}Error`]: "",
    }));
    if (field === "phone") {
      setUserInfo({ ...userInfo, [field]: e });
    } else {
      setUserInfo({ ...userInfo, [field]: e.target.value });
    }
  };

  const shouldBtnBeDisabled = () => {
    const data = Object.values(userInfo);
    if (!isBoxChecked) return true;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userInfo.email);
    if (!emailRegex) return true;
    if (data.includes("")) return true;
    return false;
  };

  return (
    <Layout layoutStyle="login-page-style">
      <div className={`${styles.signupMainContainer} login-mobile`}>
        <Header />
        {isRegistering && (
          <div className={styles.mainWrapper}>
            <div className={styles.formWrapper}>
              <div className={styles.headingWrapper}>
                <h3 className={styles.heading}>
                  Register <span className={styles.smallText}>your</span> Details
                </h3>
                <div className={styles.bgTree}>
                  <MILLGROVE_TREE style={{ height: `6vw` }} fillColor="#8a7f7f14" />
                </div>
              </div>
              <p className={styles.fieldRequiredText}>
                (All Fields are required)
              </p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formInputSection}>
                  <div className={styles.formInputWrapper}>
                    <input
                      name="name"
                      onChange={(e) => updateUserInfo("name", e)}
                      type={"text"}
                      className={styles.formInput}
                      placeholder={"Name"}
                    />
                    <p
                      style={{
                        opacity: error.errorOccured && !userInfo.name ? 1 : 0,
                      }}
                      className={styles.errorText}
                    >
                      {ERROR_MSG}
                    </p>
                  </div>

                  <div className={styles.phoneNosWrapper}>
                    <PhoneInput
                      name="phone"
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="IN"
                      value={userInfo.phone}
                      placeholder="Phone number"
                      onChange={(e) => updateUserInfo("phone", e)}
                    />
                    <p
                      style={{
                        opacity:
                          (error.errorOccured && !userInfo.phone) ||
                            isInvalidPhoneNumber(userInfo.phone)
                            ? 1
                            : 0,
                      }}
                      className={styles.errorText}
                    >
                      {error.phoneError}
                    </p>
                  </div>

                  <div className={styles.formInputWrapper}>
                    <input
                      name="email"
                      onChange={(e) => updateUserInfo("email", e)}
                      type={"email"}
                      className={styles.formInput}
                      placeholder={"Email"}
                    />

                    <p
                      style={{
                        opacity: error.errorOccured && !userInfo.email ? 1 : 0,
                      }}
                      className={styles.errorText}
                    >
                      {ERROR_MSG}
                    </p>
                  </div>
                </div>
                <div className={styles.agreementCheck}>
                  <Checkbox
                    isChecked={isBoxChecked}
                    setIsChecked={setIsBoxChecked}
                  />
                  <p>I accept the terms for processing my personal data</p>
                </div>

                <div className={styles.submitBtnWrapper}>
                  <Button
                    text={"Continue"}
                    type="submit"
                    classname="button-style48"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Signup;
