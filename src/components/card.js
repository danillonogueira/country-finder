import React from 'react';

function Card({ flag, name, pop, region, capital }) {
  return (
    <div className="card">
      <img alt="flag" src={flag} />
      {name}
      {pop}
      {region}
      {capital}
    </div>
  );
}

export default Card;