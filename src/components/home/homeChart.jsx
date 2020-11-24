import React from "react";
import styles from "./homeChart.module.css";
import { Doughnut } from "react-chartjs-2";
import { AiFillRightCircle } from "react-icons/ai";

const HomeChart = ({ language, apiData, loading, datas, db }) => {
  const region = language.region;
  const dbData = [
    db ? db["city1p"] : "20",
    db ? db["city2p"] : "20",
    db ? db["city3p"] : "20",
    db ? db["city4p"] : "20",
    db ? db["city5p"] : "20",
  ];
  const data = {
    labels: region,
    datasets: [
      {
        data: dbData,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.root}>
      <div className={styles.chart}>
        <Doughnut data={data} />
      </div>
      <div className={styles.list}>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon} />
            &nbsp;&nbsp;&nbsp;{region[0]}
          </div>
          <div className={styles.db}>{dbData[0]}%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon1} />
            &nbsp;&nbsp;&nbsp;{region[1]}
          </div>
          <div className={styles.db}>{dbData[1]}%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon2} />
            &nbsp;&nbsp;&nbsp;{region[2]}
          </div>
          <div className={styles.db}>{dbData[2]}%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon3} />
            &nbsp;&nbsp;&nbsp;{region[3]}
          </div>
          <div className={styles.db}>{dbData[3]}%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon4} />
            &nbsp;&nbsp;&nbsp;{region[4]}
          </div>
          <div className={styles.db}>{dbData[4]}%</div>
        </div>
      </div>
    </div>
  );
};

export default HomeChart;
