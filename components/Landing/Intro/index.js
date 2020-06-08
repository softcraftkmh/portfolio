import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import _ from "lodash";

import styles from "./index.module.scss";

const TITLES = [
  " React JS Enthusiastic.",
  " Next JS Adventruer.",
  " Node JS Explorer.",
  " Flutter Amaetur.",
];

const SPRING = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const Intro = () => {
  const [titles, setTitles] = useState(TITLES);

  useEffect(() => {
    setTimeout(() => {
      setTitles(_.shuffle(titles));
    }, 5000);
  }, [titles]);

  return (
    <div className={styles.container} id="intro">
      <motion.h1 className={styles.title} whileHover={{ scale: 1.1 }}>
        Hi, I'm <br /> Kaung Myat Hein
      </motion.h1>
      <div className={styles.description}>
        <p>I'm a </p>
        <div>
          {titles.map((title) => (
            <motion.p
              key={title}
              layoutTransition={SPRING}
              whileHover={{ scale: 1.1 }}
            >
              {title}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
