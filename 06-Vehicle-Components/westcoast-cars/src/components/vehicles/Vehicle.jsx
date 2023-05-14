const Vehicle = ({ vehicle }) => {
  return (
    <li key={vehicle.id}>
      {vehicle.manufacturer} - {vehicle.model}
    </li>
  );
};

export default Vehicle;
