import React from 'react';
import fetchCountries from './../helpers/service';
import Card from './card';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] }
  }

  componentDidMount() {
    fetchCountries()
      .then(res => res.json())
      .then((countries) => this.setState({ countries }));
  }

  render() {
    return (
      <StyledContainer>
        {
          this.state.countries.map((country, index) => {
            const { flag, name, population, region, capital } = country;
            
            return <Card
              flag={flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
              key={index + 1}
            ></Card>;
          })
        }
      </StyledContainer>
    );
  }
}

export default Container;
