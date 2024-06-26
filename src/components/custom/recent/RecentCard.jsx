import React from 'react';
import { Link } from 'react-router-dom';

const RecentCard = () => {
  const featuredCustomHome = [
    {
      cover: "../images/hero/h1.png",
      name: "Summer House",
      total: "Antalya/Kaş",
    },
    {
      cover: "../images/hero/h2.png",
      name: "Home",
      total: "İstanbul/Maltepe",
    },
    {
      cover: "../images/hero/h3.png",
      name: "Office",
      total: "İstanbul/Maslak",
    },
  ];

  return (
    <>
      <div className='content grid5 mtop'>
        {featuredCustomHome.map((items, index) => (
          <Link to="/rooms" key={index}>
            <div className='box'>
              <img src={items.cover} alt={items.name} />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecentCard;
