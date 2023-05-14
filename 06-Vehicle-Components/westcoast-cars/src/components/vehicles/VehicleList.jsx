import PageHeader from '../ui/PageHeader';
import Vehicle from './Vehicle';

const VehicleList = () => {
  const vehicles = [
    { id: 1, manufacturer: 'Volvo', model: 'V90' },
    { id: 2, manufacturer: 'Volkswagen', model: 'Tiguan' },
    { id: 3, manufacturer: 'Ford', model: 'Kuga' },
    { id: 4, manufacturer: 'Kia', model: 'Ceed' },
    { id: 5, manufacturer: 'Ford', model: 'Focus' },
    { id: 6, manufacturer: 'BMW', model: 'X3i' },
    { id: 7, manufacturer: 'Volvo', model: 'XC60' },
    { id: 8, manufacturer: 'BMW', model: '325i' },
    { id: 9, manufacturer: 'Toyota', model: 'Yaris' },
  ];
  return (
    <>
      <PageHeader headerText='Våra aktuella bilar i lager(VehicleList component)' />
      <h3>Våra aktuella bilar</h3>
      <ul>
        {vehicles.map((vehicle) => (
          <Vehicle vehicle={vehicle} />
        ))}
      </ul>
    </>
  );
};

export default VehicleList;
