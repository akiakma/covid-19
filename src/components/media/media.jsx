import React, { useEffect, useState } from "react";
import styles from "./media.module.css";

const Media = ({ title, darkmode }) => {
  const [video, setVideo] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    let requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=%EC%8B%A4%EC%8B%9C%EA%B0%84%20%EB%89%B4%EC%8A%A4&key=AIzaSyDWa9FC3LzwUzV3hR7_8wyFF8uqz4abA_o",
      requestOption
    )
      .then(response => response.json())
      .then(result => setVideo(result.items))
      .catch(error => console.log("error", error));
  }, []);

  return (
    <div className={darkmode ? `${styles.root}` : `${styles.darkmodeRoot}`}>
      <div className={styles.table}>
        <div className={styles.covidLive}>
          <div className={styles.title}>
            <span className={styles.span}>{title}</span>
            <div>Real Time Counter LIVE</div>
          </div>
          <iframe
            id="ytplayer"
            type="text/html"
            width="500"
            height="281.25"
            src="https://www.youtube.com/embed/NMre6IAAAiU"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className={styles.kbsLive}>
          <div className={styles.title}>
            <span className={styles.span}>{title}</span>
            <div>KBS LIVE</div>
          </div>
          <iframe
            id="ytplayer"
            type="text/html"
            width="500"
            height="281.25"
            src="https://www.youtube.com/embed/DQhfxOrzfzc"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Media;
