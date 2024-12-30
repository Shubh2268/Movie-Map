import React from 'react';
import Carousel from '../components/Carousel';
import MediaList from '../components/MediaList';

const HomePage = () => {
  return (
    <div className='bg-gray-100 dark:bg-black'>
      <Carousel />
      <MediaList />
    </div>
  )
}

export default HomePage;
