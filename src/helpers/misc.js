export const fetchCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all');
};

export const filterCountries = (countries, region) => {
  return countries.filter(country => country.region === region);
};
