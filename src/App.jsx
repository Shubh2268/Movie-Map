import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ShiftButton from './components/ShiftButton';

function App() {
  
  return (
    <>
      <Navbar />
      <Carousel movies={movies} />
      <ShiftButton />
    </>
  )
}

export default App;
