import React from "react";
import styles from "./homeChart.module.css";
import { Doughnut } from "react-chartjs-2";
import { AiFillRightCircle } from "react-icons/ai";

const HomeChart = ({ language, apiData, loading, datas }) => {
  const region = ["대구", "서울", "기타", "경기", "검역"];
  const dbData = ["10", "30", "20", "15", "25"];
  const data = {
    labels: region,
    datasets: [
      {
        data: dbData,
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
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
            &nbsp;&nbsp;&nbsp;대구
          </div>
          <div className={styles.db}>23.96%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon1} />
            &nbsp;&nbsp;&nbsp;서울
          </div>
          <div className={styles.db}>24.31%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon2} />
            &nbsp;&nbsp;&nbsp;기타
          </div>
          <div className={styles.db}>23.88%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon3} />
            &nbsp;&nbsp;&nbsp;경기
          </div>
          <div className={styles.db}>20.91%</div>
        </div>
        <div className={styles.sideList}>
          <div>
            <AiFillRightCircle className={styles.icon4} />
            &nbsp;&nbsp;&nbsp;검역
          </div>
          <div className={styles.db}>6.94%</div>
        </div>
      </div>
    </div>
  );
};

export default HomeChart;
