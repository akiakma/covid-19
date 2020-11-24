import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./home.module.css";
import HomeArea from "./homeArea";
import HomeBoard from "./homeBoard";
import HomeChart from "./homeChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = ({ language, darkmode, apiData, db, region }) => {
  const { loading, datas, error } = useSelector(state => state.posts.posts);

  return (
    <div className={!darkmode ? `${styles.rootDarkmode}` : `${styles.root}`}>
      {db ? null : (
        <div className={styles.loadingSpinner}>
          <div className="fa-8x">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        </div>
      )}
      <HomeBoard
        language={language}
        darkmode={darkmode}
        loading={loading}
        db={db}
      />

      <HomeChart
        language={language}
        darkmode={darkmode}
        loading={loading}
        db={db}
      />
      <HomeArea
        language={language}
        darkmode={darkmode}
        apiData={apiData}
        region={region}
      />
    </div>
  );
};

export default Home;
