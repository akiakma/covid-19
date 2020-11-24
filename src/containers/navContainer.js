import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/nav/nav";
import { getPosts } from "../modules/posts";
import { langToggle, language } from "../modules/language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./navContainer.module.css";

const NavContainer = ({ db }) => {
  const darkmode = useSelector(state => state.mode.mode);
  const selectLang = useSelector(state => state.world.language);

  const dispatch = useDispatch();
  const onLanguage = () => dispatch(langToggle());
  const onSwap = () => dispatch(language());

  const getPost = () => dispatch(getPosts());

  const loading = useSelector(state => state.posts.posts.loading);

  return (
    <>
      {loading ? (
        <div className={styles.loadingSpinner}>
          <div className="fa-8x">
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        </div>
      ) : null}
      <Nav
        onLanguage={onLanguage}
        onSwap={onSwap}
        darkmode={darkmode}
        selectLang={selectLang}
        getPost={getPost}
      />
    </>
  );
};

export default NavContainer;
