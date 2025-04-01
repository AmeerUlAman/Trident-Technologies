import styles from "./services.module.css"
import Servicesdisplay from "./servicesdisplay"

 
const Services = () => {
    return (
        <div className={styles.whole}>
            <h1 className={styles.title}>What we offer...</h1>
            <div className={styles.details}>
<Servicesdisplay/>

            </div>
        </div>

    );

}


export default Services;