import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import './vehicle.css';

const Vehicle = ({ vehicle }) => {
  return (
    <Card key={vehicle.id}>
      <img
        src={require(`../../assets/images/${vehicle.imageUrl}`)}
        alt={vehicle.model}
      />
      <div className='card-body'>
        {vehicle.manufacturer} -{vehicle.model}
      </div>
      <div className='card-footer'>
        <Link to='/vehicle-details' className='btn'>
          Se mer
        </Link>
      </div>
    </Card>
  );
};

export default Vehicle;
