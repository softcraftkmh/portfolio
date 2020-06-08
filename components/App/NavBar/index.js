import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./index.module.scss";

const DesktopNavBar = () => {
  return (
    <div className={styles.desktop_container}>
      <a href="/">Kaung Myat Hein</a>
      <nav className={styles.desktop_nav}>
        <Link
          onClick={() => scroll.scrollToTop()}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Hello
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          My Experience
        </Link>
        <Link to="details" spy={true} smooth={true} offset={50} duration={500}>
          My Personal Details
        </Link>
      </nav>
    </div>
  );
};

const MobileNavBar = () => {
  return (
    <nav className={styles.mobile}>
      <Link
        onClick={() => scroll.scrollToTop()}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Hello
      </Link>
      <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
        My Experience
      </Link>
      <Link to="details" spy={true} smooth={true} offset={50} duration={500}>
        My Personal Details
      </Link>
    </nav>
  );
};

const NavBar = () => {
  return (
    <div>
      <DesktopNavBar />
      <MobileNavBar />
    </div>
  );
};

export default NavBar;
