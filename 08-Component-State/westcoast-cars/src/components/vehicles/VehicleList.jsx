import React, { useState } from 'react';
import PageHeader from '../ui/PageHeader';
import Vehicle from './Vehicle';

const VehicleList = () => {
  const [vehicles, updateVehicles] = useState([
    { id: 1, manufacturer: 'Volvo', model: 'V90' },
    { id: 2, manufacturer: 'Volkswagen', model: 'Tiguan' },
    { id: 3, manufacturer: 'Ford', model: 'Kuga' },
    { id: 4, manufacturer: 'Kia', model: 'Ceed' },
    { id: 5, manufacturer: 'Ford', model: 'Focus' },
    { id: 6, manufacturer: 'BMW', model: 'X3i' },
    { id: 7, manufacturer: 'Volvo', model: 'XC60' },
    { id: 8, manufacturer: 'BMW', model: '325i' },
    { id: 9, manufacturer: 'Toyota', model: 'Yaris' },
  ]);

  const handleAddVehicleClick = () => {
    const newVehicle = { id: 10, manufacturer: 'Fiat', model: 'Uno' };
    updateVehicles((vehicles) => [...vehicles, newVehicle]);
  };

  return (
    <>
      <PageHeader headerText='Våra aktuella bilar i lager' />
      <button className='btn' onClick={handleAddVehicleClick}>
        Lätt till ny bil
      </button>
      <ul>
        {vehicles.map((vehicle) => (
          <React.Fragment key={vehicle.id}>
            <Vehicle vehicle={vehicle} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default VehicleList;
