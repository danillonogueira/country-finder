import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchCountries, mapCountries } from './../misc/helpers';

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

  return <StyledDisplay>{mapCountries(countries)}</StyledDisplay>;
};

export default Display;
