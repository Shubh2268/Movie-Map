import React from 'react'

const Card = ({ movie }) => {
  if (!movie) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="group bg-gray-800 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2">
      <div className="relative h-[300px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-lg truncate">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
        <p className="text-teal-500 font-semibold">
          Rating: {movie.vote_average.toFixed(1)} / 10
        </p>
      </div>
    </div>
  );
};


export default Card;

