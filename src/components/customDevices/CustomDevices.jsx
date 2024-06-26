

import React from "react";
import { useLocation } from 'react-router-dom';
import Recent from "./recent/Recent";
import imgdeneme from "../images/ceysu.jpg";
import Back from "../common/Back";

const CustomDevices = () => {
  const location = useLocation();
  const roomId = location.state?.roomId;
  return (
    <>
      <Back name='' title='IoT Devices' cover={imgdeneme} imageClass="cover-image" />
      <div className="separator"></div>
      <Recent roomId = {roomId}/>
    </>
  );
};

export default CustomDevices;
