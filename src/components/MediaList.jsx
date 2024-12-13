import React, { useEffect, useState } from 'react';
import { fetchMedia } from '../fetchData/FetchMedia';
import Card from './Card';

const MediaList = ({ mediaType }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      const data = await fetchMedia(mediaType);
      setMedia(data);
    };

    loadMedia();
  }, [mediaType]);

  return (
    <div className='mx-2 md:mx-10 p-4'>
      <h2 className='text-xl font-semibold text-gray-200 text-center md:text-left mb-8'>
        {mediaType === 'movie' ? 'Popular Movies' : 'Popular TV Shows'}
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10'>
        {media.map((item) => (
          <Card key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
