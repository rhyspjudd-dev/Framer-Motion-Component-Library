import { motion } from "framer-motion";

const Button = () => {
  return ( 
  <>
    <motion.button
      whileTap={{ scale: 18.9 }}
      whileHover={{
        scale: 18.2,
        transition: { duration: 1 },
      }}
    >Click
    </motion.button>
  </> 
  );
}
 
export default Button;