import Image from "next/image";import styles from "./page.module.css";
import Hero from "./hero/hero";
import Services from "./service/services";

export default function Home() {
  return (
    <div>
<Hero/>
<Services/>   
    </div>


  );
}
