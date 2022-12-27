import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiKey, baseUrl } from "../utils/constants";
import { useRouter } from "next/router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState({
    authToken: null,
    name: "",
    email: "",
    phone: "",
  });
  const [userToken, setUserToken] = useState(authDetails?.authToken);
  const [userDetails, setUserDetails] = useState({
    name: authDetails?.name,
    email: authDetails?.email,
    phone: authDetails?.phone,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

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
    if (typeof window !== undefined) {
      const authData = JSON.parse(localStorage?.getItem("userToken"));
      setAuthDetails(authData);
      setUserToken(authData?.authToken);
      setUserDetails({
        name: authData?.name,
        email: authData?.email,
        phone: authData?.phone,
      });
      if (authData?.authToken) {
        setIsLoggedIn(true);
      }
    }
  }, [userToken]);

  useEffect(() => {
    function getParsedJwt(token) {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (error) {
        return undefined;
      }
    }
    const val = getParsedJwt(userToken);
    const expirationTime = val?.exp * 1000 - 60000;
    if (Date.now() >= expirationTime) {
      localStorage?.removeItem("userToken");
      setUserToken(null);
      setUserDetails({
        name: authDetails?.name,
        email: authDetails?.email,
        phone: authDetails?.phone,
      });
      router.push("/");
    }
  }, [userToken]);

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
