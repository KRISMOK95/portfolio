import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              • Experience in building responsive Web App and optimized sites.
              </p>
              <p>• HTML5 / Tailwind CSS / JS / React / TypeScript / Angular / Vue.js / jQuery / ...</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              • Experience developing fast and optimised back-end systems
                and APIs.
              </p>
              <p>• .Net Core / ASP.Net / Node.js / Django / Spring Boot / Flask / ... </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX & Data engineer </h3>
              <p>
              • Designed multiple landing pages and have created design
                systems. Experience with big data for analytical,  operational uses and cloud development.
              </p>
              <p>• Python / Java / MySQL / MongoDB / AWS / Azure / Figma / ... </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
