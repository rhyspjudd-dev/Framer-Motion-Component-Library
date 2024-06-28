import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/button/Button";
import './styles.scss';

const container = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { 
    y: -20, 
    opacity: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    }
  }
};

export const StaggerDivs = () => {
  const [animate, setAnimate] = useState(false);

  const handleButtonClick = () => {
    setAnimate(!animate);
  };

  return (
    <>
      <Button buttonText={animate ? "Hide elements" : "Show elements"} onClick={handleButtonClick} />
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        {[0, 1, 2, 3, 5, 6].map((index) => (
          <motion.li key={index} className="item" variants={item} />
        ))}
      </motion.ul>
    </>
  );
};
