import React from "react";
import Recent from "./recent/Recent";
import { useLocation, useHistory } from 'react-router-dom';
import imgdeneme from "../images/oda.jpg";
import Back from "../common/Back";

const CustomRooms = ( ) => {
  const location = useLocation();
  const homeId = location.state?.homeId;
  return (
    <>
      <Back name='' title='Make Your Rooms Smart' cover={imgdeneme} imageClass="cover-image" />
      <div className="separator"></div>
      <Recent homeId = {homeId}/>
    </>
  );
};

export default CustomRooms;
