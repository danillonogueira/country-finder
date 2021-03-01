import React, { useReducer, createContext } from 'react';

export const CountriesContext = createContext();
const reducer = (state, action) => {
  switch(action.type) {
    case 'STORE_COUNTRIES':
      return {
        countries: [...action.payload]
      }
    default:
      return { countries: [] };
  }
};
export const CountriesContextProvider = (props) => {
  const [ countriesState, countriesDispatch ] = useReducer(reducer, { countries: [] });

  return (
    <CountriesContext.Provider value={[countriesState, countriesDispatch]}>
      {props.children}
    </CountriesContext.Provider>
  );
};
