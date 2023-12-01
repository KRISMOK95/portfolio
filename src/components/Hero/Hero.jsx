import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm KaLong</h1>
        <p className={styles.description}>
        I am an experienced software developer recent graduate from the University of Zurich. And I have almost 3 years of hands-on experience in this position. I'm looking for a permanent position to begin now. Reach out if you'd like to learn more!
        </p>
        <a href="kaxm462@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/cvpic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
