import React from "react";
import styles from "./aboutTreatment.module.css";

const AboutTreatment = ({ language }) => {
  return (
    <>
      <div className={styles.stymptoms}>
        <div className={styles.title}>{language.treatment.title[0]}</div>
        <div className={styles.body}>
          <p className={styles.ptagTitle}>{language.treatment.title[1]}</p>
          <p className={styles.ptagContext}>{language.treatment.context[0]}</p>
          <p className={styles.ptagContext}>{language.treatment.context[1]}</p>
          <p className={styles.ptagContext}>{language.treatment.context[2]}</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.ptagTitle}>{language.treatment.title[2]}</p>
          <p className={styles.ptagContext}>{language.treatment.context[3]}</p>
          <p className={styles.ptagContext}>{language.treatment.context[4]}</p>
        </div>
      </div>
    </>
  );
};

export default AboutTreatment;
