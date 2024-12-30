import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';
import ShiftButton from './ShiftButton';

const MediaList = () => {
  const { media, mediaType, fetchMedia, category } = useContext(AppContext);

  useEffect(() => {
    fetchMedia(mediaType, category);
  }, [mediaType, category, fetchMedia]);

  return (
    <div className='mx-2 md:mx-10 p-4'>
      <ShiftButton />

      <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200 text-center md:text-left mb-8 capitalize'>
        {category.replace('_', ' ')} {mediaType === 'movie' ? 'Movies' : 'TV Shows'}
      </h2>

      {/* Media Cards */}
      {media.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-10'>
          {media.map((item) => (
            <Card key={item.id} media={item} mediaType={mediaType} />
          ))}
        </div>
      ) : (
        <p className='text-gray-400 text-center mt-10'>
          No results found for this category.
        </p>
      )}
    </div>
  );
};

export default MediaList;
