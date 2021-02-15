import React from 'react';
import fetchCountries from '../helpers/service';
import Card from './card';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countries: [] }
  }

  componentDidMount() {
    fetchCountries()
      .then(res => res.json())
      .then(countries => this.setState({ countries }))
      .catch(err => console.log(err));
  }

  getCountries() {
    return this.state.countries.map((country, index) => {          
      return <Card 
        country={country} 
        key={index + 1}
      ></Card>;
    });
  }

  render() {
    return <StyledDisplay>{this.getCountries()}</StyledDisplay>;
  }
}

export default Display;
