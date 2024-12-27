import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { AppContext } from '../context/AppContext';
import Divider from '../components/Divider';

const DetailsPage = () => {
  const { mediaType, id } = useParams();
  const { details, loading, error, fetchDetails } = useContext(AppContext);

  useEffect(() => {
    fetchDetails(mediaType, id);
  }, [mediaType, id, fetchDetails]);

  if (loading) {
    return (
      <div className='bg-black text-white min-h-screen flex items-center justify-center'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-black text-white min-h-screen flex items-center justify-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!details) {
    return (
      <div className='bg-black text-white min-h-screen flex items-center justify-center'>
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
    director,
    writers,
    cast = [], // Cast details from the API response
  } = details;

  return (
    <div className='bg-black text-white min-h-screen'>
      {/* Hero Section */}
      <div className='relative w-full h-[40vh] lg:h-[60vh] border-[0.5px] border-gray-600 md:border-none'>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt='Backdrop'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
      </div>

      {/* Content Section */}
      <div className='container mx-auto px-5 lg:px-8 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-7'>
        {/* Poster Section */}
        <div className='relative mx-auto -mt-48 md:-mt-28 lg:mx-0 w-fit md:min-w-64 md:max-w-64'>
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt='Poster'
            className='h-56 w-40 md:h-[380px] md:w-[350px] object-cover rounded-lg shadow-md shadow-teal-600'
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className='text-2xl lg:text-4xl font-semibold text-white pt-5 md:pt-0'>{title || name}</h1>
          {tagline && <p className='text-neutral-300'>{tagline}</p>}

          <Divider />

          <div className='flex items-center gap-3'>
            <p>
              <span className='font-semibold'>Rating :</span> {vote_average || 0} +
            </p>
            <span>|</span>
            <p>
              <span className='font-semibold'>Votes :</span> {vote_count || 0} +
            </p>
            <span>|</span>
            <p>
              <span className='font-semibold'>Duration :</span>{' '}
              {runtime
                ? `${Math.floor(runtime / 60)}h ${runtime % 60}m`
                : episode_run_time
                  ? `${episode_run_time[0]} m`
                  : 'N/A'}
            </p>
          </div>

          <Divider />
          <div>
            <h2 className='text-xl font-semibold text-white mb-1'>Overview</h2>
            <p className='text-gray-300 mb-4'>{overview || 'No overview available.'}</p>

            <Divider />

            <div className='flex items-center gap-3 my-3 text-center'>
              <p>
                <span className='font-semibold'>Status :</span> {status || 'N/A'}
              </p>
              <span>|</span>
              <p>
                <span className='font-semibold'>Release Date :</span>{' '}
                {release_date || first_air_date || 'N/A'}
              </p>
              <span>|</span>
              <p><span className='font-semibold'>Revenue :</span> $ {revenue ? revenue.toLocaleString() : '--'}</p>
            </div>

            <Divider />

            <div>
              <p><span className='font-semibold'>Director :</span> {director}</p>
            </div>

            <Divider />

            <div>
              <p><span className='font-semibold'>Writer(s) :</span> {writers}</p>
            </div>

            <Divider />

            {/* Cast Section */}
            <div>
              <h2 className='font-semibold text-white mb-2'>Cast :</h2>
              <div className='grid grid-cols-3 md:grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
                {cast.length > 0 ? (
                  cast.map((actor) => (
                    <div key={actor.id} className='text-center'>
                      <img
                        src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                        alt={actor.name}
                        className='w-14 h-14 md:w-20 md:h-20 rounded-full object-cover mx-auto'
                      />
                      <p className='text-gray-400 text-xs md:text-sm mt-2'>{actor.name}</p>
                    </div>
                  ))
                ) : (
                  <p className='text-gray-400'>No cast information available.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
