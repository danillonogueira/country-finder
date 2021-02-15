const fetchCountries = function() {
  return fetch('https://restcountries.eu/rest/v2/all');
};

export default fetchCountries;
