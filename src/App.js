import React from 'react';
import Select from './components/select';
import Display from './components/display';
import CssReset from './helpers/cssReset';
import { CountriesContextProvider } from './contexts/countriesContext';
import { RegionsContextProvider } from './contexts/regionsContext';

const App = () => {
  return (
    <>
      <CssReset />
      <RegionsContextProvider>
        <Select></Select>
      </RegionsContextProvider>
      <CountriesContextProvider>
        <Display></Display>
      </CountriesContextProvider>
    </>
  );
};

export default App;
