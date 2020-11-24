import React, { useEffect, useState } from "react";
import Bottom from "../bottom/bottom";
import styles from "./about.module.css";
import AboutPrevention from "./aboutPrevention";
import AboutSymptoms from "./aboutSymptoms";
import AboutTreatment from "./aboutTreatment";

const About = ({ darkmode, language }) => {
  const [isLeft, setIsLeft] = useState(true);
  const [isCenter, setIsCenter] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const clickLeft = () => {
    setIsLeft(true);
    setIsCenter(false);
    setIsRight(false);
  };
  const clickCenter = () => {
    setIsLeft(false);
    setIsCenter(true);
    setIsRight(false);
  };
  const clickRight = () => {
    setIsLeft(false);
    setIsCenter(false);
    setIsRight(true);
  };

  return (
    <div className={darkmode ? `${styles.root}` : `${styles.darkmodeRoot}`}>
      <div className={styles.menu}>
        <div
          className={isLeft ? `${styles.leftClicked}` : `${styles.left}`}
          onClick={clickLeft}
        >
          {language.symptom.main[0]}
        </div>

        <div
          className={isCenter ? `${styles.centerClicked}` : `${styles.center}`}
          onClick={clickCenter}
        >
          {language.symptom.main[1]}
        </div>

        <div
          className={isRight ? `${styles.rightClicked}` : `${styles.right}`}
          onClick={clickRight}
        >
          {language.symptom.main[2]}
        </div>
      </div>
      {isLeft && <AboutSymptoms language={language} />}
      {isCenter && <AboutPrevention language={language} />}
      {isRight && <AboutTreatment language={language} />}
    </div>
  );
};

export default About;
