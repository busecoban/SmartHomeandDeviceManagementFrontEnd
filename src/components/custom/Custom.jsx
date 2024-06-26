import React from "react";
import Recent from "./recent/Recent";
import imgdeneme from "../images/banner.png";
import Back from "../common/Back";

const Custom = () => {
  return (
    <>
      <Back name='' title='Make Your Home Smart' cover={imgdeneme} imageClass="cover-image" />
      <div className="separator"></div>
      <Recent />
    </>
  );
};

export default Custom;
