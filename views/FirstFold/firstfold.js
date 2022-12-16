import { useContext, useEffect } from "react";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import gsap from "gsap";

// Styles
// import "./firstfold.scss";

function Firstfold({ setIsRegistering, setIsLoggingIn }) {
  const { userToken } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const tl = gsap.timeline();
      tl.from(".animation-block .animation-text", 1.8, {
        y: 100,
        ease: "power4.out",
        delay: 0.3,
        skewY: 0,
        stagger: {
          amount: 0.3
        },
        autoAlpha: 0,
      })
    }, 5000);
  }, [])

  useEffect(() => {
    if (userToken) {
      router.push("/home");
    }
  }, [userToken]);


  return (
    <Layout>
      <div className="first-fold-section">
        <Header />
        <div className="mg-first-fold">
          <div className="mg-first-fold-text">
            <div>
              <div className="animation-block">
                <div className="mg-first-fold-heading animation-text">
                  MEANINGFUL
                </div>
                <div className="mg-first-fold-heading animation-text">
                  LIVING
                </div>
              </div>
              <div className="animation-block">
                <div className="mg-first-fold-subheading animation-text">
                  Living at Millgrove transcends ordinary notions of luxury. It is
                  a natural haven that gives you a complete sense of belonging. A
                  place where you can nurture relationships and make time for the
                  things that matter most.
                </div>
              </div>
              <div className="animation-block">
                {!userToken ? (
                  <div className="mg-first-fold-auth-btns animation-text">
                    <Button
                      clickhandler={() => setIsLoggingIn(true)}
                      text={"LOGIN"}
                      variant="secondary"
                      classname="btn-hero-sec"
                    />
                    <Button
                      clickhandler={() => setIsRegistering(true)}
                      text={"REGISTER"}
                      variant="secondary"
                      classname="btn-hero-sec"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Firstfold;
