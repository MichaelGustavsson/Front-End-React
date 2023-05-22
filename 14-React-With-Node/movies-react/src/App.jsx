import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';

import Movies from './components/Movies/Movies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const url = 'http://localhost:5020/api/1/movies';

  useEffect(() => {
    const loadMovies = async () => {
      const { data } = await axios.get(url);
      setMovies(data);
    };

    loadMovies();
  }, []);

  const onAddMovieHandler = async (e) => {
    e.preventDefault();
    let movieList = [];
    const title = e.target.moviename.value;
    const newMovie = { title };
    const { data } = await axios.post(url, newMovie);
    movieList = [...movies, data];
    setMovies(movieList);
  };

  return (
    <article>
      <header>
        <h1>Populära filmer</h1>
      </header>
      <section>
        <Movies movies={movies} onAddMovie={onAddMovieHandler} />
      </section>
    </article>
  );
};

export default App;
