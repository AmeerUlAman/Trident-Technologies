"use client";

import styles from "./wwo.module.css";
import { Code, Monitor, Database, Settings, Brain, ShieldCheck, Brush } from "lucide-react";


const services = [
    { title: "Web Development", description: "High-performance websites using modern frameworks like Next.js and React.", icon: <Code size={32} /> },
    { title: "Frontend Development", description: "Interactive UI/UX with seamless user experience and aesthetics.", icon: <Monitor size={32} /> },
    { title: "Backend Development", description: "Scalable and secure backend solutions using Phoenix, Node.js, and PostgreSQL.", icon: <Database size={32} /> },
    { title: "Automation", description: "Streamlining workflows and automating processes for efficiency.", icon: <Settings size={32} /> },
    { title: "AI/ML Solutions", description: "Intelligent systems powered by machine learning and AI.", icon: <Brain size={32} /> },
    { title: "Software Quality Assurance", description: "Ensuring bug-free and reliable software through testing.", icon: <ShieldCheck size={32} /> },
    { title: "Graphic Design & Illustration", description: "Creative designs, branding, and illustrations with Adobe Illustrator.", icon: <Brush size={32} /> },
  ];
  

const WhatWeOffer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>What We Offer</h2>
        <p className={styles.subtitle}>
          Explore our range of cutting-edge software solutions tailored to your needs.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
         <div key={index} className={styles.card}>
         <div className={styles.icon}>{service.icon}</div>
         <h3 className={styles.cardTitle}>{service.title}</h3>
         <p className={styles.cardDescription}>{service.description}</p>
       </div>
       
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
