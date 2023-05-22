import { Fragment } from 'react';
import Movie from './Movie';

const Movies = ({ movies, onAddMovie }) => {
  return (
    <>
      <form onSubmit={onAddMovie}>
        <input type='text' name='moviename' />
        <button>Lägg till film</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <Fragment key={movie.id}>
            <Movie movie={movie} />
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default Movies;
