import React from 'react';

function Card({ flag, name, population, region, capital }) {
  return (
    <div className="card">
      <img alt="flag" src={flag} />
      {name}
      {population}
      {region}
      {capital}
    </div>
  );
}

export default Card;