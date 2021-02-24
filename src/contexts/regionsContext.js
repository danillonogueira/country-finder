import React, { useReducer, createContext } from 'react';

export const RegionsContext = createContext();
const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_SELECTED_REGION':
      return { region: action.payload }
    default:
      throw new Error();  
  }
};
export const RegionsContextProvider = (props) => {
  const [
    regionsState, 
    regionsDispatch
  ] = useReducer(reducer, { region: 'All' });

  return (
    <RegionsContext.Provider value={[regionsState, regionsDispatch]}>
      {props.children}
    </RegionsContext.Provider>
  );
};
