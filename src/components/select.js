import { RegionsContext } from './../contexts/regionsContext';
import { useContext } from 'react';
import Regions from './../helpers/regions';

const Select = () => {
  const [ regionsState, regionsDispatch] = useContext(RegionsContext);

  const changeHandler = (value) => {
    regionsDispatch({
      type: 'CHANGE_SELECTED_REGION',
      payload: value
    });
  };

  const mapRegions = () => {
    return (
      Regions.map((region, index) => {
        return (
          <option 
            key={index + 1} 
            value={region}
          >
            {region}
          </option>
        );
      })
    );
  };

  return (
    <select 
      value={regionsState.region} 
      onChange={event => changeHandler(event.target.value)}
    >
      <option value="All" defaultValue>All</option>
      {mapRegions()}
    </select>
  );
}

export default Select;
