import React, { useContext, useEffect, useState } from "react";

// Views Sections here
import HeroSection from "../../views/HeroSection/firstfold";
import HomeCarousel from "../../views/HomeCarousel/HomeCarousel";
import HomeCarouselMobile from "../../views/HomeCarouselMobile/HomeCarouselMobile";
import Reservation from "../../views/Reservation";
import Secondfold from "../../views/SecondFold/secondfold";
import ThreeDView from "../../views/ThreeDView";
import Layout from "../../components/Layout/Layout";
import Footer from "../../views/Footer/Footer";
import { MILLGROVE_LOGO } from "../../utils/assets";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";

export default function Home() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { userToken } = useContext(AuthContext);
  const router = useRouter();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // useEffect(() => {
  //   if (!userToken) {
  //     router.push("/");
  //   }
  // }, [userToken]);
  return (
    <>
      <div className={`header-home ${show ? "active" : "inactive"} `}>
        <div className="mg-first-fold-top-text">
          <a href="www.haryanarera.gov.in">www.haryanarera.gov.in</a>
          <div>HRERA2020A0009</div>
        </div>
        <div className="mg-first-fold-header" data-scroll>
          <MILLGROVE_LOGO />
        </div>
      </div>

      <Layout footerHide={true}>
        <div className="home-section">
          <HeroSection />
          <Secondfold />
          <ThreeDView />
          <HomeCarousel />
          <HomeCarouselMobile />
          <Reservation />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
