import React from "react";
import { useSelector } from "react-redux";
import Bottom from "../components/bottom/bottom";
import Home from "../components/home/home";
import Loading from "../components/home/loading";
import NavContainer from "./navContainer";

const HomeContainer = ({ db }) => {
  const language = useSelector(state => state.world.language.home);
  const darkmode = useSelector(state => state.mode.mode);
  const region = useSelector(state => state.region.region.data);

  return (
    <>
      <NavContainer />
      {db ? (
        <Home language={language} darkmode={darkmode} db={db} region={region} />
      ) : null}
    </>
  );
};

export default HomeContainer;
