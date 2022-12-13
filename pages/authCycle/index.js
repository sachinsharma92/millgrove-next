import { useContext, useEffect, useRef, useState } from "react";
import Firstfold from "../../views/FirstFold/firstfold";
import Home from "../../views/Home/home";
//Components
import { AuthContext } from "../../context/AuthContext";
import { useIntersection } from "../../hooks/useIntersection";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Login from "../../views/Login/Login";
import Signup from "../../views/Signup/Signup";
import SignupSuccess from "../../views/Signup/SignupSuccess";
import CookiesPopup from "../../components/CookiesPopup/cookiesPopup";
import ReactPlayer from "react-player";

const AuthCycle = () => {
  const [menu, setMenu] = useState(false);
  const [loader, setLoader] = useState(true);
  const [cookiesPopup, setCookiesPopup] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegisterationSuccessfull, setIsRegisterationSuccessfull] =
    useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const carouselViewRef = useRef();
  const debounceTimerId = useRef(null);
  const isCarouselInView = useRef(false);
  const scrollRef = useRef();

  setTimeout(() => {
    setLoader(false);
  }, 5000);

  return (
    <div className="login-process">
      <div className="main-components">
        {cookiesPopup && (
          <CookiesPopup closeCookiesPopup={() => setCookiesPopup(false)} />
        )}

        {loader && <Home />}

        {!isRegistering && !isRegisterationSuccessfull && !isLoggingIn && (
          <Firstfold
            openMenu={() => setMenu(true)}
            setIsLoggingIn={setIsLoggingIn}
            setIsRegistering={setIsRegistering}
          />
        )}

        {isRegistering && (
          <Signup
            isRegistering={isRegistering}
            setIsRegistering={setIsRegistering}
            isRegisterationSuccessfull={isRegisterationSuccessfull}
            setIsRegisterationSuccessfull={setIsRegisterationSuccessfull}
          />
        )}

        {isRegisterationSuccessfull && <SignupSuccess />}
        {isLoggingIn && (
          <Login
            setIsLoggingIn={setIsLoggingIn}
            setIsRegistering={setIsRegistering}
          />
        )}
      </div>

      <div className="login-video-bg">
        <video src="/videos/bg.mp4" autoPlay muted playsInline loop />
      </div>
    </div>
  );
};

export default AuthCycle;
