import React from "react";
import styles from "./aboutSymptoms.module.css";
const AboutSymptoms = ({ language }) => {
  return (
    <>
      <div className={styles.stymptoms}>
        <div className={styles.title}>{language.symptom.title[0]}</div>
        <div className={styles.body}>
          <div className={styles.bodyFirst}>
            <div>{language.symptom.title[1]}</div>
            <ul>
              <li>{language.symptom.context[0]}</li>
              <li>{language.symptom.context[1]}</li>
              <li>{language.symptom.context[2]}</li>
            </ul>
          </div>
          <div className={styles.bodySecond}>
            <div>{language.symptom.title[2]}</div>
            <ul>
              <li>{language.symptom.context[3]}</li>
              <li>{language.symptom.context[4]}</li>
              <li>{language.symptom.context[5]}</li>
              <li>{language.symptom.context[6]}</li>
              <li>{language.symptom.context[7]}</li>
              <li>{language.symptom.context[8]}</li>
              <li>{language.symptom.context[9]}</li>
            </ul>
          </div>
          <div className={styles.bodyThird}>
            <div>{language.symptom.title[3]}</div>
            <ul>
              <li>{language.symptom.context[10]}</li>
              <li>{language.symptom.context[11]}</li>
              <li>{language.symptom.context[12]}</li>
            </ul>
          </div>
          <div className={styles.bodyBottom}>
            <div>
              <div>{language.symptom.additional[0]}</div>
              <div>{language.symptom.additional[1]}</div>
              <div>{language.symptom.additional[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSymptoms;
