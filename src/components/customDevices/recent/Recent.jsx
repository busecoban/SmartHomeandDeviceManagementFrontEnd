import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import DeviceRecent from "./DeviceRecent";
import RecentCard from "./RecentCard";

const Recent = ({roomId}) => {
  return (
    <>
      <section className='recent padding'>
        <div>
          <Heading title='Your Devices' />
          <div className='container'>
            <DeviceRecent roomId={roomId}/>
          </div>
        </div>
      </section>

      <section className='recent padding'>
        <div>
          <Heading title='Do You Want To Add Device?' />
          <div className='container'>
            <RecentCard roomId={roomId}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recent;
