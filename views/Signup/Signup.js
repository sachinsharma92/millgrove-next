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
import { WarningOctagon } from "../../public/icons/icons";
import CountrySelect from "../../components/CountrySelect";
import { checkNonNumericInput } from "../../utils/checkNonNumericInput";
import { isPhoneNosValid } from "../../utils/isPhoneNosValid";

const ERROR_MSG = "This is a required field, can’t be left empty";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Signup = ({
  isRegistering,
  setIsRegistering,
  isRegisterationSuccessfull,
  setIsRegisterationSuccessfull,
}) => {
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
  const [isBoxChecked, setIsBoxChecked] = useState(true);
  const [error, setError] = useState({
    errorOccured: false,
    nameError: "",
    phoneError: "",
    emailError: "",
  });
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    dial_code: "91",
    code: "IN",
  });

  const isAnyFieldEmpty = () => {
    if (!userInfo.name) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        nameError: ERROR_MSG,
      }));
    }
    if (!userInfo.phone) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        phoneError: ERROR_MSG,
      }));
    }
    if (!userInfo.email) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        emailError: ERROR_MSG,
      }));
    }
    if (!emailRegex.test(userInfo.email)) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        emailError: "This is not a valid email ID",
      }));
    }
    if (!isPhoneNosValid(userInfo.phone, selectedCountry.dial_code)) {
      setError((prev) => ({
        ...prev,
        errorOccured: true,
        phoneError: "The number provided is invalid",
      }));
    }
    if (
      Object.values(userInfo).includes("") ||
      !isPhoneNosValid(userInfo.phone, selectedCountry.dial_code) ||
      !emailRegex.test(userInfo.email)
    ) {
      return true;
    }
    if (!isBoxChecked) return true;
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAnyFieldEmpty()) return;

    setError((prev) => ({
      ...prev,
      errorOccured: false,
      nameError: "",
      phoneError: "",
      emailError: "",
    }));

    try {
      const res = await axios.post(
        `${baseUrl}/client/register`,
        {
          name: userInfo.name,
          email: userInfo.email,
          phone: `+${selectedCountry.dial_code}${userInfo.phone}`,
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
    } catch (err) {
      console.log(err);
    }
  };

  const updateUserInfo = (field, e) => {
    setError((prev) => ({
      ...prev,
      [`${field}Error`]: "",
    }));
    if (e.target.value === "") {
      setError((prev) => ({
        ...prev,
        [`${field}Error`]: ERROR_MSG,
      }));
    }
    setUserInfo({ ...userInfo, [field]: e.target.value });
  };

  const shouldBtnBeDisabled = () => {
    const data = Object.values(userInfo);
    if (!isBoxChecked) return true;
    if (data.includes("")) return true;
    return false;
  };

  const getEmailErrorMessage = () => {
    if (error.errorOccured && !userInfo.email) {
      return ERROR_MSG;
    }
    if (
      error.errorOccured &&
      !emailRegex.test(userInfo.email) &&
      error.emailError
    ) {
      return "This is not a valid email ID";
    }
    return "";
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
                  Register <span className={styles.smallText}>your</span>{" "}
                  Details
                </h3>
                <div className={styles.bgTree}>
                  <MILLGROVE_TREE
                    style={{ height: `6vw` }}
                    fillColor="#8a7f7f14"
                  />
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
                    {error.errorOccured && !userInfo.name ? (
                      <span className={styles.warningIconWrapper}>
                        <WarningOctagon />
                      </span>
                    ) : null}
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
                    <CountrySelect
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setSelectedCountry}
                    />
                    <input
                      className={styles.phoneNumberInput}
                      type={"tel"}
                      placeholder="Phone Number"
                      value={userInfo.phone}
                      onChange={(e) => updateUserInfo("phone", e)}
                      onKeyDown={(e) => checkNonNumericInput(e)}
                    />
                    {(error.errorOccured && !userInfo.phone) ||
                    (!isPhoneNosValid(
                      userInfo.phone,
                      selectedCountry.dial_code
                    ) &&
                      error.phoneError) ? (
                      <span className={styles.warningIconWrapper}>
                        <WarningOctagon />
                      </span>
                    ) : null}
                    <p
                      style={{
                        opacity:
                          (error.errorOccured && !userInfo.phone) ||
                          !isPhoneNosValid(
                            userInfo.phone,
                            selectedCountry.dial_code
                          )
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
                      type={"text"}
                      className={styles.formInput}
                      placeholder={"Email"}
                    />
                    {(error.errorOccured &&
                      !userInfo.email &&
                      error.emailError) ||
                    (error.errorOccured &&
                      !emailRegex.test(userInfo.email) &&
                      error.emailError) ? (
                      <span className={styles.warningIconWrapper}>
                        <WarningOctagon />
                      </span>
                    ) : null}
                    <p
                      style={{
                        opacity:
                          (error.errorOccured && !userInfo.email) ||
                          (error.errorOccured &&
                            !emailRegex.test(userInfo.email))
                            ? 1
                            : 0,
                      }}
                      className={styles.errorText}
                    >
                      {getEmailErrorMessage()}
                    </p>
                  </div>
                </div>
                <div className={styles.agreementCheck}>
                  <Checkbox
                    isBoxChecked={isBoxChecked}
                    setIsBoxChecked={setIsBoxChecked}
                  />
                  <p>I accept the terms for processing my personal data</p>
                </div>

                <div className={styles.submitBtnWrapper}>
                  <Button
                    isDisabled={shouldBtnBeDisabled()}
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
