import React from "react";
import CountUp from "react-countup";

import styles from "./homeBoard.module.css";

const HomeBoard = ({ language, apiData, loading, datas, db }) => {
  const TotalCase = Number(db["TotalCase"].replace(",", ""));
  console.log("++++++++", TotalCase);
  const TotalRecovered = Number(db["TotalRecovered"].replace(",", ""));

  const TotalDeath = Number(db["TotalDeath"].replace(",", ""));
  const NowCase = Number(db["NowCase"].replace(",", ""));

  const casePercentage = Number(db["casePercentage"]);
  const recoveredPercentage = Number(db["recoveredPercentage"]);
  const deathPercentage = Number(db["deathPercentage"]);

  return (
    <div className={styles.root}>
      <div className={styles.table}>
        <div className={styles.title}>{language.title} &nbsp;</div>
        <div className={styles.info}>
          <div className={styles.infoDiv}>
            <CountUp end={TotalCase} separator="," duration={5} />
            <div className={styles.infoCount}>(+231)</div>
            <div className={styles.infoDivSub}>{language.confirmedCase[0]}</div>
          </div>
          <div className={styles.infoDiv}>
            <CountUp end={TotalRecovered} separator="," duration={5} />
            <div className={styles.infoCount}>(+80)</div>
            <div className={styles.infoDivSub}>{language.confirmedCase[1]}</div>
          </div>
          <div className={styles.infoDiv}>
            <CountUp end={TotalDeath} separator="," duration={5} />
            <div className={styles.infoCount}>(+2)</div>
            <div className={styles.infoDivSub}>{language.confirmedCase[2]}</div>
          </div>
          <div className={styles.infoDiv}>
            <CountUp end={NowCase} separator="," duration={5} />
            <div className={styles.infoCount}>(+122)</div>
            <div className={styles.infoDivSub}>{language.confirmedCase[3]}</div>
          </div>
        </div>
        <div className={styles.subInfo}>
          <div className={styles.subInfoDiv}>
            <CountUp end={casePercentage} decimals={1} duration={5} />
            <span>%</span>
            <div className={styles.subInfoDesc}>{language.percentage[0]}</div>
          </div>
          <div className={styles.subInfoDiv}>
            <CountUp end={recoveredPercentage} decimals={1} duration={5} />
            <span>%</span>
            <div className={styles.subInfoDesc}>{language.percentage[1]}</div>
          </div>
          <div className={styles.subInfoDiv}>
            <CountUp end={deathPercentage} decimals={1} duration={5} />
            <span>%</span>
            <div className={styles.subInfoDesc}>{language.percentage[2]}</div>
          </div>
        </div>
        <div className={styles.bottomDesc}>
          <div>{language.remarks[0]}</div>
          <div>{language.remarks[1]}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBoard;
