import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../fetchData/fetchData';
import Card from './Card';

const MediaList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      setMovies(await fetchMovies());
    };

    loadMedia();
  }, []);

  return (
    <div className='mx-2 md:mx-10 p-4'>
      <h2 className='text-xl font-semibold text-gray-200 text-center md:text-left mb-8'>Popular Movies</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:md:grid-cols-5 gap-x-5 gap-y-10'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
