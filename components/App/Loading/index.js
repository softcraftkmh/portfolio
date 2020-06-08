import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react-web";
import CountUp from "react-countup";

import * as loadingAnimation from "lotties/loading.json";

import styles from "./index.module.scss";

const defaultOptions = {
  animationData: loadingAnimation.default,
  loop: true,
  autoplay: true,
};

const Loading = ({ isShow }) => {
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Lottie options={defaultOptions} height={200} width={200} />
          <span>
            <CountUp end={100} duration={1} /> %
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
