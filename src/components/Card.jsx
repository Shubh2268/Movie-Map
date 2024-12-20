import React from 'react';
import { Link } from 'react-router';

const Card = ({ media, mediaType }) => {
  if (!media) {
    return <div className='text-center text-gray-400'>Loading...</div>;
  }

  const title = media.title || media.name || 'No Title Available';
  const releaseDate = media.release_date || media.first_air_date || 'N/A';
  const overview = media.overview || 'No description available';
  const posterPath = media.poster_path;

  return (
    <Link to={`/details/${mediaType}/${media.id}`} className='group bg-gray-800 rounded-lg shadow-md shadow-teal-600 overflow-hidden relative'>
      {/* Image */}
      <div className='relative h-[250px] md:h-[320px] lg:h-[450px]'>
        {posterPath ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            alt={title}
            className='w-full h-full object-cover transition-transform transform group-hover:scale-105 duration-700 ease-in-out'
          />
        ) : (
          <div className='w-full h-full bg-gray-700 flex items-center justify-center text-gray-400'>
            No Image Available
          </div>
        )}
      </div>

      {/* Overlay Details */}
      <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex flex-col justify-end p-4'>
        <h3 className='text-white font-bold text-base lg:text-lg truncate'>{title}</h3>
        <p className='text-gray-100 text-xs lg:text-sm py-1'>{releaseDate}</p>
        <p className='text-gray-200 text-xs lg:text-sm'>
          {overview.length > 150 ? overview.slice(0, 150) + '...' : overview}
        </p>
        <p className='text-teal-400 text-sm lg:text-base font-semibold'>
          Rating: {media.vote_average ? media.vote_average.toFixed(1) : 'N/A'} / 10
        </p>
      </div>
    </Link>
  );
};

export default Card;
