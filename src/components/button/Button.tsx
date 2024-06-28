import { motion } from "framer-motion";
import './styles.scss'

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
 }

const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return ( 
  <a className="button">
    <motion.button
      onClick={onClick}
      whileTap={{ scale: .95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      // whileHover={{
      //   scale: 1.1,
      //   transition: { duration: 0.2 },
      // }}
    >{buttonText}
    </motion.button>
  </a> 
  );
}
 
export default Button;