import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { AppContext } from '../context/AppContext';

const DetailsPage = () => {
  const { mediaType, id } = useParams();
  const { details, loading, error, fetchDetails } = useContext(AppContext);

  useEffect(() => {
    fetchDetails(mediaType, id);
  }, [mediaType, id, fetchDetails]);

  if (loading) {
    return (
      <div className='bg-gray-900 text-white min-h-screen flex items-center justify-center'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-gray-900 text-white min-h-screen flex items-center justify-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!details) {
    return (
      <div className='bg-gray-900 text-white min-h-screen flex items-center justify-center'>
        <p>No details available.</p>
      </div>
    );
  }

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    tagline,
    vote_average,
    vote_count,
    overview,
    status,
    release_date,
    first_air_date,
    revenue,
    runtime,
    episode_run_time,
  } = details;

  return (
    <div className='bg-black text-white min-h-screen'>
      {/* Hero Section */}
      <div className='relative w-full h-[40vh] lg:h-[60vh]'>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt='Backdrop'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        {/* Poster Section */}
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt='Poster'
            className='h-80 w-60 object-cover rounded'
          />
        </div>

        {/* Details Section */}
        <div className='flex-grow absolute bottom-0 left-1/4 pr-5'>
          <h1 className='text-3xl lg:text-4xl font-semibold mb-2'>
            {title || name}
          </h1>
          {tagline && (
            <p className='text-lg text-gray-300 mb-4'>{tagline}</p>
          )}
          <div className='flex items-center text-sm lg:text-base gap-4 mb-4'>
            <p>
              <span className='font-semibold'>Rating:</span> {vote_average || 0}
            </p>
            <p>
              <span className='font-semibold'>Votes:</span> {vote_count || 0}
            </p>
            <p>
              <span className='font-semibold'>Duration:</span>{' '}
              {runtime
                ? `${Math.floor(runtime / 60)}h ${runtime % 60}m`
                : episode_run_time
                ? `${episode_run_time[0]}m`
                : 'N/A'}
            </p>
          </div>

          <h2 className='text-xl font-semibold mb-2'>Overview</h2>
          <p className='text-gray-300 mb-4'>{overview || 'No overview available.'}</p>

          <div className='text-sm lg:text-base text-gray-400'>
            <p>
              <span className='font-semibold'>Status:</span> {status || 'N/A'}
            </p>
            <p>
              <span className='font-semibold'>Release Date:</span>{' '}
              {release_date || first_air_date || 'N/A'}
            </p>
            {revenue && (
              <p>
                <span className='font-semibold'>Revenue:</span> $
                {revenue.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
