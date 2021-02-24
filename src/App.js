import React from 'react';
import Select from './components/select';
import Display from './components/display';
import CssReset from './helpers/cssReset';
import { CountriesContextProvider } from './contexts/countriesContext';
import { RegionsContextProvider } from './contexts/regionsContext';

const App = () => {
  return (
    <React.Fragment>
      <CssReset />
      <RegionsContextProvider>
        <Select></Select>
      </RegionsContextProvider>
      <CountriesContextProvider>
        <Display></Display>
      </CountriesContextProvider>
    </React.Fragment>
  );
};

export default App;
