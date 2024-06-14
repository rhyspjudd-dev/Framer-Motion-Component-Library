import AnimatedTextCharacter from "../../animations/text/AnimatedTextCharacter";
import AnimatedTextWord from "../../animations/text/AnimatedTextWord";

const Title = () => {
  return ( 
    <section id='title'>
      <h1><AnimatedTextCharacter text={"Framer Animation Library"} /></h1>
      <h3><AnimatedTextWord text={"A React & Framer Motion component library."} /></h3>
    </section>
   );
}
 
export default Title;
