import { mapRegions } from './../helpers/mappers';

const Select = () => {
  return (
    <select>
      <option value="All" defaultValue>All</option>
      {mapRegions()}
    </select>
  );
}

export default Select;
