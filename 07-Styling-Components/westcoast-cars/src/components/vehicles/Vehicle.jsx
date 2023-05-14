import './vehicle.css';

const Vehicle = ({ vehicle }) => {
  return (
    <li key={vehicle.id}>
      <span style={{ fontWeight: 'bold' }}>{vehicle.manufacturer}</span> -
      {vehicle.model}
    </li>
  );
};

export default Vehicle;
