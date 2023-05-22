const Movie = ({ movie }) => {
  return <li key={movie.id}>{movie.title}</li>;
};

export default Movie;
