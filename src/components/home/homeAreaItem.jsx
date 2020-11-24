import React from "react";

import styles from "./homeAreaItem.module.css";
const HomeAreaItem = ({ language, darkmode, apiData }) => {
  const data = language.area;

  return (
    <div className={darkmode ? `${styles.area}` : `${styles.areaDarkmode}`}>
      {apiData["countryName"]}
      <div className={styles.statistics}>
        <div className={styles.patients}>{data[0]}</div>
        <div className={styles.redPatient}>
          {apiData["totalCase"]}
          <span>{language.person}</span>
        </div>
      </div>
      <div className={styles.statistics}>
        <div className={styles.patient}>{data[1]}</div>
        <div
          className={darkmode ? `${styles.numero}` : `${styles.numeroDarkmode}`}
        >
          {apiData["recovered"]}
          <span>{language.person}</span>
        </div>
      </div>
      <div className={styles.statistics}>
        <div className={styles.patients}>{data[2]}</div>
        <div className={styles.redPatient}>
          {apiData["death"]}
          <span>{language.person}</span>
        </div>
      </div>
      <div className={styles.statistics}>
        <div className={styles.patient}>{data[3]}</div>
        <div
          className={darkmode ? `${styles.numero}` : `${styles.numeroDarkmode}`}
        >
          {apiData["newCase"]}
          <span>{language.person}</span>
        </div>
      </div>
      <div className={styles.statistics}>
        <div className={styles.patient}>{data[4]}</div>
        <div
          className={darkmode ? `${styles.numero}` : `${styles.numeroDarkmode}`}
        >
          {apiData["percentage"]}
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export default HomeAreaItem;
