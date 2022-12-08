import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiKey, baseUrl } from "../utils/constants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({ authToken: null, name: "", email: "" });
  // const token = JSON.parse(localStorage?.getItem("userToken")) || {
  //   authToken: null,
  //   name: "",
  //   email: "",
  // };
  //   if (token?.authToken) {
  //     setupAuthHeaderForServiceCalls(token?.authToken);
  //   }
  const [userToken, setUserToken] = useState(token?.authToken);
  const [userDetails, setUserDetails] = useState({
    name: token?.name,
    email: token?.email,
    phone: token?.phone,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function loginWithCredentials(otp, otpToken) {
    try {
      const res = await axios.post(
        `${baseUrl}/client/verify-otp`,
        {
          otp,
        },
        {
          headers: {
            "rest-api-key": apiKey,
            Authorization: `Bearer ${otpToken}`,
          },
        }
      );

      if (res.status === 200) {
        setUserToken(res?.data.data.accessToken);
        console.log(res);
        setUserDetails({
          name: res.data.data.name,
          email: res.data.data.email,
          phone: res.data.data.phone,
        });

        localStorage?.setItem(
          "userToken",
          JSON.stringify({
            // authToken: token,
            authToken: res.data.data.accessToken,
            name: res.data.data.name,
            email: res.data.data.email,
            phone: res.data.data.phone,
          })
        );
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logoutUser() {
    localStorage?.removeItem("userToken");
    setUserToken(null);
    setUserDetails({ name: "", email: "" });
  }

  useEffect(() => {
    if (window !== undefined) {
      setToken(JSON.parse(localStorage?.getItem("userToken")));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginWithCredentials,
        logoutUser,
        userToken,
        userDetails,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
