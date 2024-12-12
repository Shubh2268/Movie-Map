import React from 'react';
import Carousel from '../components/Carousel';
import ShiftButton from '../components/ShiftButton';
import MediaList from '../components/MediaList';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <ShiftButton />
      <MediaList />
    </div>
  )
}

export default HomePage;
