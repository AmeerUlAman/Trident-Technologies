import styles from './services.module.css'
import Image from 'next/image';


interface services{
name: string,
im: string,
description: string,

}


const Servicescards: React.FC<services> = ({name,im,description}) => {
    return (
    <div className={styles.card}>
        <div className={styles.name}>{name}</div>
        <button className={styles.detbut}>{name}</button>
   
        <div className={styles.im}>
            <Image
            src={im}
            height={1024}
            width={1024}
            alt={name}
            className={styles.image}
            />

        </div>
        <div className={styles.description}>{description}</div>
     

    </div>
    );

}

export default Servicescards;