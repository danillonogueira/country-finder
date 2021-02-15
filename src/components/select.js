import Regions from './../mocks/regions';

function Select() {
  return (
    <select>
      <option value="All" defaultValue>All</option>
      {Regions.map((region, index) => <option key={index + 1} value={region}>{region}</option>)}
    </select>
  );
}

export default Select;
