// Available regions
// 'Africa',
// 'Americas',
// 'Asia',
// 'Europe',
// 'Oceania'

export const fetchCountries = function() {
  return fetch('https://restcountries.eu/rest/v2/all');
};
