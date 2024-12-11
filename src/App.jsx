import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ShiftButton from './components/ShiftButton';
import MediaList from './components/MediaList';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <ShiftButton />
      <MediaList />
      <Footer />
    </>
  )
}

export default App;
