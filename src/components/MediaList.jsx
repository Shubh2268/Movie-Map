import React, { useEffect, useState } from 'react';
import { fetchMovies, fetchTVShows } from '../fetchData/fetchData';

const MediaList = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      setMovies(await fetchMovies());
      setTVShows(await fetchTVShows());
    };

    loadMedia();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white">Popular Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded"
            />
            <h3 className="text-white mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6 text-white">Popular TV Shows</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tvShows.map((tv) => (
          <div key={tv.id} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              alt={tv.name}
              className="rounded"
            />
            <h3 className="text-white mt-2">{tv.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaList;
