import Card from './../components/card';
import Regions from './regions';

export const mapCountries = (countries) => {
  return countries.map((country, index) => {          
    return <Card 
      country={country} 
      key={index + 1}
    ></Card>;
  });
};

export const mapRegions = () => {
  return Regions.map((region, index) => {
    return (
      <option 
        key={index + 1} 
        value={region}
      >
        {region}
      </option>
    );
  })
};
