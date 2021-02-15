import React from 'react';
import Select from './components/select';
import Display from './components/display';
import CssReset from './misc/cssReset';

const App = () => {
  return (
    <React.Fragment>
      <CssReset />
      <Select></Select>
      <Display></Display>
    </React.Fragment>
  );
};

export default App;
