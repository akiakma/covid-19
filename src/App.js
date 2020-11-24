import React, { useEffect, useState } from "react";
import NavContainer from "./containers/navContainer";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutContainer from "./containers/aboutContainer";

import HomeContainer from "./containers/homeContainer";
import MediaContainer from "./containers/mediaContainer";

import { getPosts } from "./modules/posts";
import { useDispatch, useSelector } from "react-redux";
import { getRegion } from "./modules/region";

const App = () => {
  const db = useSelector(state => state.posts.posts.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getRegion());
  }, []);

  return (
    <div className={db ? `${styles.root}` : `${styles.rootSpinner}`}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <HomeContainer db={db} />
          </Route>
          <Route exact path="/info">
            <AboutContainer />
          </Route>
          <Route exact path="/media">
            <MediaContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
