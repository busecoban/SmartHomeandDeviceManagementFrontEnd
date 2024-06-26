import React, { useState } from "react";
import Back from "../common/Back";
import aboutImage from "../images/about.jpg";
import alperBilge from "./images/alperBilge.jpg";
import özge from "./images/özge.jpg";
import ibrahim from "./images/ibrahim.jpg";
import meryem from "./images/meryem.jpg";
import buse from "./images/buse.jpg";
import "./about.css";

const About = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleMouseEnter = (id) => {
    setExpandedId(id);
  };

  const handleMouseLeave = () => {
    setExpandedId(null);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Assoc.Prof.Dr.Alper Bilge - Instructor",
      description:
        "Under the guidance of our project instructor, Doç Dr. Alper Bilge, we are constantly pushing ourselves to learn and grow, as we work together to bring our ideas to life.",
      image: alperBilge,
    },
    {
      id: 2,
      name: "Özge Havva Şahin - Mobile Developer",
      description:
        "Özge is our mobile maestro, with a passion for creating intuitive and user-friendly mobile applications. With her expertise in mobile development, she ensures that our projects are accessible to users on the go, without compromising on functionality or design.",
      image: özge,
    },
    {
      id: 3,
      name: "Ibrahim Duman - Backend Developer",
      description:
        "Ibrahim is our backend wizard, with a knack for turning complex ideas into efficient and scalable solutions. With his expertise in backend technologies, he ensures that our projects are robust and reliable.",
      image: ibrahim,
    },
    {
      id: 4,
      name: "Meryem Ahıskalı - Frontend Developer",
      description:
        "Meryem is our frontend guru, with an eye for design and a passion for creating beautiful and engaging user interfaces. With her expertise in frontend development, she ensures that our projects are not only functional but also visually stunning and easy to use.",
      image: meryem,
    },
    {
      id: 5,
      name: "Buse Çoban - IoT Developer",
      description:
        "Buse is our IoT enthusiast, specializing in building innovative and connected systems. With her expertise in IoT development, she brings a unique perspective to our projects, ensuring that they are not only functional but also interconnected in meaningful ways.",
      image: buse,
    },
  ];

  return (
    <>
      <section className="about">
        <Back name="" title="About Us - Who We Are?" cover={aboutImage} />
        <div className="container flex mtop">
          <div className="about-content">
            <div className="circles-container">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`circle-item ${expandedId === member.id ? "expanded" : ""}`}
                  onMouseEnter={() => handleMouseEnter(member.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="circle-image"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="circle-text">
                    <p>{member.name}</p>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
