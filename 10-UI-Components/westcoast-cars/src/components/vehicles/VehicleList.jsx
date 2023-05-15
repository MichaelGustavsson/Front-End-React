import React from 'react';
import PageHeader from '../ui/PageHeader';
import Vehicle from './Vehicle';

import './vehicle-list.css';

const VehicleList = ({ vehicles }) => {
  if (!vehicles || vehicles.length === 0) {
    return (
      <>
        <PageHeader headerText='Inga bilar i lager, tyvärr' />
      </>
    );
  }
  return (
    <>
      <PageHeader headerText='Våra aktuella bilar i lager' />
      <section className='vehicles-gallery'>
        {vehicles.map((vehicle) => (
          <React.Fragment key={vehicle.id}>
            <Vehicle vehicle={vehicle} />
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

export default VehicleList;
