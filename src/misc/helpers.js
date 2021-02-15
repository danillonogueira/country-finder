import Card from './../components/card';

export const fetchCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all');
};

export const mapCountries = (countries) => {
  return countries.map((country, index) => {          
    return <Card 
      country={country} 
      key={index + 1}
    ></Card>;
  });
};

export const filterCountries = (countries, region) => {
  return countries.filter(country => country.region === region);
};
