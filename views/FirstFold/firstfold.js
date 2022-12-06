import { useContext } from "react";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import Layout from "../../components/Layout";
import Header from "../../components/Header";

// Styles
// import "./firstfold.scss";

function Firstfold({ setIsRegistering, setIsLoggingIn }) {
  // const { isLoggedIn, userToken } = useContext(AuthContext);

  return (
    <Layout>
      <div className="first-fold-section">
        <Header />
        <div className="mg-first-fold">
          <div className="mg-first-fold-text">
            <div>
              <div className="mg-first-fold-heading">
                MEANINGFUL <br />
                LIVING
              </div>
              <div
                className="mg-first-fold-subheading">
                Living at Millgrove transcends ordinary notions of luxury. It is a
                natural haven that gives you a complete sense of belonging. A place
                where you can nurture relationships and make time for what matters
                most.
              </div>
              <div className="mg-first-fold-auth-btns"
              >
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Firstfold;
