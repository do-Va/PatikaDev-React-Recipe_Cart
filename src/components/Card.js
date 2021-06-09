import React from 'react';
import '../styles/card.scss';

const Card = props => {
  const { author, title, date, image, desc } = props;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-author">{author[0]}</div>
        <div className="title">
          <p className="card-title">{title}</p>
          <p className="card-date">{date}</p>
        </div>
      </div>
      <img className="card-img" src={image} alt={title} />
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default Card;
