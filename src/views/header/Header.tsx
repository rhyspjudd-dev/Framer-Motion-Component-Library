import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Switch from "../../components/switch/Switch";
import "./styles.scss"

const Header = () => {

  const [lightDarkMode, setLightDarkMode] = useState(true);

  const toggleSwitch = () => {
    setLightDarkMode(!lightDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', lightDarkMode);
  }, [lightDarkMode]);

  
  return ( 
    <header>
      <Navigation />
      <Switch 
        leftLabel="Light" 
        rightLabel="Dark" 
        lightDarkMode={lightDarkMode} 
        toggleSwitch={toggleSwitch} 
      />
    </header>
   );
}
 
export default Header;