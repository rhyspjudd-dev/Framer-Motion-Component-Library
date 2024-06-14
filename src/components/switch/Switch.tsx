import { motion } from "framer-motion";
import './styles.scss';

interface SwitchProps {
  leftLabel: string;
  rightLabel: string;
  lightDarkMode: boolean;
  toggleSwitch: () => void;
}

const Switch = ({ 
  leftLabel, 
  rightLabel, 
  lightDarkMode,
  toggleSwitch 
}: SwitchProps): JSX.Element => {

  return (
    <div className="switch-container">
      <div className="leftLabel">{leftLabel}</div>
      <div 
        className="switch" 
        data-ison={lightDarkMode}
        onClick={toggleSwitch} 
      >
        <motion.div 
          className="handle" 
          layout 
          transition={spring} 
        />
      </div>
      <div className="rightLabel">{rightLabel}</div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
 
export default Switch;
