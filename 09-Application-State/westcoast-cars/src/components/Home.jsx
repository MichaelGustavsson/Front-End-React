import VehicleList from './vehicles/VehicleList';

const Home = ({ vehicles }) => {
  return (
    <>
      <section className='container'>
        <VehicleList vehicles={vehicles} />
      </section>
    </>
  );
};

export default Home;
