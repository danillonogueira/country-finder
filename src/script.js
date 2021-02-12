
// Available regions
const availableRegions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania'
];
const store = {
  countries: []
};

const storeCountries = function(countries) {
  store.countries = countries;
};

export const getCountriesByContinent = function(continent) {
  return store.countries.filter(country => country.region === continent);
};

export const fetchCountries = async function() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then((countries) => {
      storeCountries(countries);
    })
    .catch((error) => console.log(error));
};
