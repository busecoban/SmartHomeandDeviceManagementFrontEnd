import React, { useState } from "react";
import "./header.css";
import { Link, useHistory } from "react-router-dom";

const nav = [
  {
    text: "home",
    path: "/home",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
];

const Header = ({ userId }) => {
  const [navList, setNavList] = useState(false);
  const history = useHistory();

  console.log('Header received userId:', userId); // userId'yi konsola yazdır

  const handleLogout = () => {
    console.log("User logged out!");
    history.push('/');
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
        {userId && (
          <div className="button">
            <button className="btn2">
              <i className="fa fa-user"></i> Profile  {/* userId'yi burada göster */}
            </button>
          </div>
        )}
        <div className="button">
          <button className="btn1" onClick={handleLogout}>
            <i className="fa fa-log-out"></i> Log Out
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
