import AOS from "aos";
import { useEffect } from "react";
import AuthProvider from "../context/AuthContext";
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
