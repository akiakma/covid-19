import React from "react";
import { useSelector } from "react-redux";
import About from "../components/about/about";
import Bottom from "../components/bottom/bottom";
import NavContainer from "./navContainer";

const AboutContainer = () => {
  const darkmode = useSelector(state => state.mode.mode);
  const language = useSelector(state => state.world.language.information);

  return (
    <>
      <NavContainer />
      <About darkmode={darkmode} language={language} />
      <Bottom />
    </>
  );
};

export default AboutContainer;
