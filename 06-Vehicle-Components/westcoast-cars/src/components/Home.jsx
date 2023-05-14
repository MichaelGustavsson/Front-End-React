import PageHeader from './ui/PageHeader';
import VehicleList from './vehicles/VehicleList';

const Home = () => {
  return (
    <>
      <section className='container'>
        <PageHeader headerText='Välkommen till Westcoast Cars (Home component)' />
        <p>Detta är vår startsida</p>
      </section>
      <hr />
      <VehicleList />
    </>
  );
};

export default Home;
