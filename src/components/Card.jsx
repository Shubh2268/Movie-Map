import React from 'react';

const Card = ({ movie }) => {

  if (!movie) {
    return <div className='text-center text-gray-400'>Loading...</div>;
  }

  return (
    <div className='group bg-gray-800 rounded-lg shadow-md shadow-teal-600 overflow-hidden relative'>
      <div className='relative h-[500px]'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-full object-cover transition-transform transform group-hover:scale-105 duration-500 ease-in-out' />
      </div>

      <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4'>
        <h3 className='text-white font-bold text-lg truncate'>{movie.title}</h3>
        <p className='text-gray-100 text-sm py-1'>{movie.release_date}</p>
        <p className='text-gray-200 text-sm'>{movie.overview}</p>
        <p className='text-teal-300 font-semibold'>
          Rating: {movie.vote_average.toFixed(1)} / 10
        </p>
      </div>
    </div>
  );
};

export default Card;
