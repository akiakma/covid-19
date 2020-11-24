import React from "react";

import NavContainer from "./navContainer";
import Media from "../components/media/media";
import { useSelector } from "react-redux";
import Bottom from "../components/bottom/bottom";

const MediaContainer = () => {
  const title = useSelector(state => state.world.language.media.title);
  const darkmode = useSelector(state => state.mode.mode);

  return (
    <>
      <NavContainer />
      <Media title={title} darkmode={darkmode} />
      <Bottom />
    </>
  );
};

export default MediaContainer;
