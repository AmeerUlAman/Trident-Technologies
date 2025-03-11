import Image from "next/image";
import styles from "./hero.module.css"
import Nav from "../nav/nav";
const Hero =()=> {
return(
    <div className="">
{/* <div >
<Image
height={371}
width={3334}
src={'/logo'}
alt=""
 className={styles.logocontainer}
/>
</div> */}
<Nav/>

    </div>

);

} 

export default Hero;