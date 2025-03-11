import Image from "next/image";
import styles from "./hero.module.css"
import Nav from "../nav/nav";
const Hero =()=> {
return(
    <div className={styles.bg}>
        <div className={styles.bgc}></div>
 
<Nav/>

    </div>

);

} 

export default Hero;