import React from "react";
import Bottom from "../bottom/bottom";
import styles from "./homeArea.module.css";
import HomeAreaItem from "./homeAreaItem";
const HomeArea = ({ language, darkmode, region }) => {
  const regionData = region && Object.keys(region).splice(2);

  return (
    <>
      <div className={styles.root}>
        <div
          className={darkmode ? `${styles.table}` : `${styles.tableDarkmode}`}
        >
          {regionData.map((regionData, index) => {
            return (
              <HomeAreaItem
                key={regionData}
                language={language}
                darkmode={darkmode}
                apiData={region[regionData]}
              />
            );
          })}
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default HomeArea;
