import React from 'react';
import Select from './components/select';
import Container from './components/container';
import CssReset from './helpers/cssReset';

const App = () => {
  return (
    <React.Fragment>
      <CssReset />
      <Select></Select>
      <Container></Container>
    </React.Fragment>
  );
};

export default App;
