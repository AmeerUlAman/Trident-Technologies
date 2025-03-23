import styles from "./services.module.css"
import Servicesdisplay from "./servicesdisplay"


interface services {
name: string,
im: string,
description: string,

}
const Services:React.FC<services> = ({name,im,description}) => {
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