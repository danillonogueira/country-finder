import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchCountries from '../helpers/service';
import Card from './card';

const StyledDisplay = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const Display = () => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    fetchCountries()
      .then(res => res.json())
      .then(countries => setCountries(countries))
      .catch(err => console.log(err));
  });

  return <StyledDisplay>
    {
      countries.map((country, index) => {          
        return <Card 
          country={country} 
          key={index + 1}
        ></Card>;
      })
    }
  </StyledDisplay>;
};

export default Display;
