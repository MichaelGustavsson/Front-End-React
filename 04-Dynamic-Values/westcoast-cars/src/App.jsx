function App() {
  const header = 'Detta är titeln på sidan';
  const text = 'Detta är texten som ska beskriva vårt företag';
  const displayVehicles = true;
  const vehicle = {
    vehicleId: 1,
    manufacturer: 'Volvo',
    model: 'V60',
    modelYear: 2019,
    mileage: 85000,
  };

  const vehicles = [
    {
      vehicleId: 1,
      manufacturer: 'Volvo',
      model: 'V60',
      modelYear: 2019,
      mileage: 85000,
    },
    {
      vehicleId: 2,
      manufacturer: 'Ford',
      model: 'Mustang',
      modelYear: 2017,
      mileage: 85000,
    },
    {
      vehicleId: 3,
      manufacturer: 'Volkswagen',
      model: 'Tiguan',
      modelYear: 2013,
      mileage: 85000,
    },
  ];

  const vehicleList = (
    <>
      <hr />
      <h3>Antal bilar i lager {vehicles.length}</h3>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={vehicle.vehicleId}>
            {vehicle.manufacturer} - {vehicle.model} - {vehicle.modelYear} -
            index: {index}
          </li>
        ))}
      </ul>
    </>
  );
  // if (displayVehicles) {
  //   return (
  //     <>
  //       <hr />
  //       <h3>Antal bilar i lager {vehicles.length}</h3>
  //       <ul>
  //         {vehicles.map((vehicle, index) => (
  //           <li key={vehicle.vehicleId}>
  //             {vehicle.manufacturer} - {vehicle.model} - {vehicle.modelYear} -
  //             index: {index}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // }

  return (
    <section className='container'>
      <h1 className='page-title'>{header}</h1>
      <p>{text}</p>
      <p>
        <span>Bilmärke:</span> {vehicle.manufacturer}
      </p>
      <p>
        <span>Modell:</span> {vehicle.model}
      </p>
      <p>
        <span>Årsmodell:</span> {vehicle.modelYear}
      </p>
      {displayVehicles && vehicleList}

      {/* {displayVehicles && (
        <>
          <hr />
          <h3>Antal bilar i lager {vehicles.length}</h3>
          <ul>
            {vehicles.map((vehicle, index) => (
              <li key={vehicle.vehicleId}>
                {vehicle.manufacturer} - {vehicle.model} - {vehicle.modelYear} -
                index: {index}
              </li>
            ))}
          </ul>
        </>
      )} */}
      {/* {
        displayVehicles ? (
          <>
            <hr />
            <h3>Antal bilar i lager {vehicles.length}</h3>
            <ul>
              {vehicles.map((vehicle, index) => (
                <li key={vehicle.vehicleId}>
                  {vehicle.manufacturer} - {vehicle.model} - {vehicle.modelYear}{' '}
                  - index: {index}
                </li>
              ))}
            </ul>
          </>
        ) : null
        // 'Finns inga bilar i lager'
      } */}
    </section>
  );
}

export default App;
