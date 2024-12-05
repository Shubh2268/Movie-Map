import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ShiftButton from './components/ShiftButton';
import MovieCard from './components/MovieCard';

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <ShiftButton />
      <MovieCard />
    </>
  )
}

export default App;
