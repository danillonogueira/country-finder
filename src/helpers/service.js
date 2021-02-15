
// Available regions
const availableRegions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania'
];
// const store = {
//   countries: []
// };

// const storeCountries = function(countries) {
//   store.countries = countries;
// };

// export const filterCountries = function(continent) {
//   return store.countries.filter(country => country.region === continent);
// };

export const fetchCountries = function() {
  return fetch('https://restcountries.eu/rest/v2/all');
};
