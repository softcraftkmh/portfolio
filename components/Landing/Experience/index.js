import { motion } from "framer-motion";
import Tilt from "react-tilt";

import styles from "./index.module.scss";

const INFOS = [
  {
    title: "Marathon Express (Logistics Office-use System)",
    image: "/marathon.jpg",
    link: "https://www.marathonmyanmar.com",
  },
  {
    title: "Ready To Travel",
    image: "/rtt.jpg",
    link: "https://www.readytotravel.com",
  },
  {
    title: "SoftCraft Digital",
    image: "/softcraft.jpg",
    link: "https://www.softcraft.digital",
  },
];

const Card = ({ info, myClass }) => {
  return (
    <Tilt className={myClass}>
      <a href={info.link} target="_blank" rel="noopener">
        <motion.img
          whileHover={{ filter: "brightness(100%)" }}
          initial={{ filter: "brightness(60%)" }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className={styles.info_image}
          src={info.image}
          alt={info.title}
        />
        <p className={styles.info_title}>{info.title}</p>
      </a>
    </Tilt>
  );
};

const Experience = () => {
  return (
    <div className={styles.container} id="experience">
      <div className={styles.content}>
        <h2>My Experience</h2>
        <div className={styles.info_container}>
          <Card info={INFOS[0]} myClass={styles.info_1} />
          <Card info={INFOS[1]} myClass={styles.info_2} />
          <Card info={INFOS[2]} myClass={styles.info_3} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
