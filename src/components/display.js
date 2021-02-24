import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { fetchCountries } from './../helpers/misc';
import { CountriesContext } from './../contexts/countriesContext';
import Card from './../components/card';

const StyledDisplay = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const Display = () => {
  const [ countriesState, countriesDispatch ] = useContext(CountriesContext);

  useEffect(() => {
    fetchCountries()
      .then(res => res.json())
      .then((countries) => {
        countriesDispatch({ 
          type: 'STORE_COUNTRIES',
          payload: countries 
        });
      })
      .catch(err => console.log(err));
  });

  return (
    <StyledDisplay>
      {countriesState.countries.map((country, index) => {
        return (
          <Card
            country={country}
            key={index + 1}
          />
        );
      })}
    </StyledDisplay>
  );
};

export default Display;
