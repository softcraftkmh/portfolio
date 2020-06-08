import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Loading from "components/App/Loading";
import NavBar from "components/App/NavBar";
import Footer from "components/App/Footer";
import Intro from "components/Landing/Intro";
import Experience from "components/Landing/Experience";
import Details from "components/Landing/Details";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <Intro />
      <Experience />
      <Details />
      <Footer />
      <Loading isShow={isLoading} />
    </div>
  );
};

export default index;
