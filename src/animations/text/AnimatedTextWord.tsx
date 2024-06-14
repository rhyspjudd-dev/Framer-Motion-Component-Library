import { motion } from "framer-motion";

interface AnimatedTextWordProps {
  text: string;
}

// ANIMATES WHOLE WORD

const AnimatedTextWord = ({ text }: AnimatedTextWordProps) => {
  const words = text.split(" ");

// Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          style={{ marginRight: '.5rem' }}
          variants={child}
          key={index} >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTextWord;