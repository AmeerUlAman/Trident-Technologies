import styles from "./nav.module.css"

const Nav =()=>{
return(
<div className={styles.mnv}>
<nav className={styles.nv}>
<li>Home</li>
<li>Services</li>
<li>Hire a team</li>
<li>Why Us</li>
<li>Contact Us</li>
</nav>


</div>
);

}


export default Nav;