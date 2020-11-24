import React from "react";
import styles from "./aboutPrevention.module.css";

const AboutPrevention = ({ language }) => {
  return (
    <>
      <div className={styles.stymptoms}>
        <img
          className={styles.img}
          src="https://i.postimg.cc/D0tjgZ6P/coronamask.png"
        ></img>
        <div className={styles.imgdiv}>{language.prevention.title[0]}</div>
        <div className={styles.title}>{language.prevention.title[1]}</div>
        <div className={styles.body}>
          <div className={styles.bodyFirst}>
            <div>{language.prevention.title[2]}</div>
            <ul>
              <li>{language.prevention.context[0]}</li>
              <li>{language.prevention.context[1]}</li>
              <li>{language.prevention.context[2]}</li>
              <li>{language.prevention.context[3]}</li>
              <li>{language.prevention.context[4]}</li>
              <li>{language.prevention.context[5]}</li>
              <li>{language.prevention.context[6]}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPrevention;
