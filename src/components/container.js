import React from 'react';
import { fetchCountries } from './../helpers/service';
import Card from './card';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    fetchCountries()
      .then(res => res.json())
      .then((countries) => this.setState({ countries }));
  }

  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

export default Container;
