import Servicescards from './servicecard';
import styles from './services.module.css'

interface services{
    name: string,
    im: string,
    description: string,
    
    }
const servicesdata: services[] = [
    {
        name:"Website Development" ,
        im: "/webdev.webp", 
        description: "we web web",
    },
    {
        name:"AI" ,
        im: "/ai.webp", 
        description: "we web web",
    },
    {
        name:"Graphics Design" ,
        im: "/graphicsdesign.webp", 
        description: "we web web",
    },
    {
        name:"Automation" ,
        im: "/automation.webp", 
        description: "we web web",
    },

]

const Servicesdisplay =()=>{

return(
<div className={styles.display}>
{servicesdata.map((services,index)=>(
<Servicescards
key={index}
name={services.name}
im={services.im}
description={services.description}
/>

))}


</div>

);


}

export default Servicesdisplay;