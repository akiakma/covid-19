import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { Button } from "react-bootstrap";
import { MdLanguage, MdRefresh, MdDvr } from "react-icons/md";
import Navbutton from "./navbutton";
import { useHistory } from "react-router-dom";

const Nav = React.memo(function Nav({
  onLanguage,
  onSwap,
  darkmode,
  selectLang,
  getPost,
}) {
  const onSwitch = () => {
    onLanguage();
    onSwap();
  };
  let today = new Date();
  let clock = today.toLocaleString();

  const [time, setTime] = useState(clock);

  const date = () => {
    let today = new Date();
    let clock = today.toLocaleString();
    setTime(clock);
  };

  const update = () => {
    getPost();
    date();
  };

  const data = selectLang;
  const history = useHistory();

  const goToHome = () => {
    history.push("/home");
  };
  const goToInfo = () => {
    history.push("/info");
  };
  const goToMedia = () => {
    history.push("/media");
  };

  const [isHome, setIshome] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [isMedia, setIsMedia] = useState(false);

  useEffect(() => {
    if (history.location.pathname === "/home") {
      setIshome(true);
    } else if (history.location.pathname === "/info") {
      setIsInfo(true);
    } else if (history.location.pathname === "/media") {
      setIsMedia(true);
    }
  }, []);

  return (
    <div className={darkmode ? `${styles.root}` : `${styles.rootDark}`}>
      <div className={styles.title}>
        <div className={styles.banner}>
          <div className={styles.bannerLogo}>
            <div className={styles.logo}>
              <MdDvr />
            </div>
            LIVE BOARD
          </div>
          <div className={styles.bannerSwitch}>
            <div className={styles.bannerSwitchDiv}>
              <MdLanguage />
              <Button variant="dark" onClick={onSwitch}>
                Language
              </Button>
            </div>
            <div>
              <Navbutton />
            </div>
          </div>
        </div>
        <div className={styles.titleBoard}>
          <div className={styles.titleBoardDiv}>{data.nav.title}</div>
          <div>{data.nav.subtitle}</div>
        </div>
      </div>
      <div className={styles.menu}>
        <div
          className={
            isHome ? `${styles.menuHomeClicked}` : `${styles.menuHome}`
          }
          onClick={goToHome}
        >
          {data.nav.table[0]}
        </div>
        <div
          className={
            isInfo ? `${styles.menuInfoClicked}` : `${styles.menuInfo}`
          }
          onClick={goToInfo}
        >
          {data.nav.table[1]}
        </div>
        <div
          className={
            isMedia ? `${styles.menuMediaClicked}` : `${styles.menuMedia}`
          }
          onClick={goToMedia}
        >
          {data.nav.table[2]}
        </div>
      </div>

      <div className={styles.update}>
        <span>{data.nav.update}</span> &nbsp; {time}
        <button className={styles.updateButton}>
          <MdRefresh onClick={update} />
        </button>
      </div>
    </div>
  );
});

export default Nav;
