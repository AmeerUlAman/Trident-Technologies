"use client";

import { useEffect } from "react"; 
import styles from "./hero.module.css";
import Nav from "../nav/nav";
import Typed from "typed.js";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [" Applications", " Websites", " Mobile Apps"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.bg}>
      <Nav />
 <hr className={styles.h}/>
      <div className={styles.herostmt}>
        <div className={styles.herostmtbg}>
          <p className={styles.heading}>
            Building software solutions, and innovating AI and automation in <br />
            <span id="typed-text" className={styles.animatedText}></span>
          </p>
          <p className={styles.highlights}>
            Innovate. Automate. Elevate. – Your Vision, Our Code.
          </p>
          <div>
            <button className={styles.cta}>Get a quote</button>
            <button className={styles.cta2}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
