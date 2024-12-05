import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { movies } = useContext(AppContext);

  if (!movies || movies.length === 0) {
    return <div className="text-center text-gray-500">No movies to display</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
