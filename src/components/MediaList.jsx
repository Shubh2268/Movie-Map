import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';

const MediaList = () => {
  const { media, mediaType, loading, error, setMediaType } = useContext(AppContext);

  useEffect(() => {
    setMediaType(mediaType);
  }, [mediaType, setMediaType]);

  if (loading) {
    return <div className='text-center text-gray-200 mt-10'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-red-500 mt-10'>{error}</div>;
  }

  return (
    <div className='mx-2 md:mx-10 p-4'>
      <h2 className='text-xl font-semibold text-gray-200 text-center md:text-left mb-8'>
        {mediaType === 'movie' ? 'Popular Movies' : 'Popular TV Shows'}
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10'>
        {media.map((item) => (
          <Card key={item.id} media={item} mediaType={mediaType} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
