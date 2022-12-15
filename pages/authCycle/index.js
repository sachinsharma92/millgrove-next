import { useRef, useState } from "react";
import Firstfold from "../../views/FirstFold/firstfold";
import Home from "../../views/Home/home";
//Components
import CookiesPopup from "../../components/CookiesPopup/cookiesPopup";
import Login from "../../views/Login/Login";
import Signup from "../../views/Signup/Signup";
import SignupSuccess from "../../views/Signup/SignupSuccess";

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
        <video
          playsInline
          autoPlay
          muted
          loop
          preload="none"
          className="lazy"
          poster="https://pixabay.com/images/id-3822149/"
        >
          <source
            src="https://millgrove.s3.ap-south-1.amazonaws.com/pexels-kindel-media-7578555.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default AuthCycle;
