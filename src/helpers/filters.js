const filterCountries = function(countries, region) {
  return countries.filter(country => country.region === region);
};

export default filterCountries;
