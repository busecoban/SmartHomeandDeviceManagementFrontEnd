import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <Heading title='Your Houses' />
        <div className='container'>
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
