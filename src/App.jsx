import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ShiftButton from './components/ShiftButton';

function App() {

  const movies = [
    {
      title: "Inception",
      image: "https://w0.peakpx.com/wallpaper/625/268/HD-wallpaper-x-men-days-of-future-past-banner-x-men-movies-banner.jpg",
      releaseDate: "2010",
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      title: "The Dark Knight",
      image: "https://cdn.dribbble.com/userupload/14965225/file/original-c2cf0305b2ef5978f0723b6c1abdb325.jpeg?resize=400x0",
      releaseDate: "2008",
      description: "A classic superhero film featuring Batman.",
    },
    {
      title: "Inception",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinMr3VZrVPOiBn-5bxRynnm4vhsx3iISMGw&s",
      releaseDate: "2010",
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      title: "The Dark Knight",
      image: "https://png.pngtree.com/thumb_back/fw800/background/20240109/pngtree-a-compelling-movie-poster-background-image_15605697.jpg",
      releaseDate: "2008",
      description: "A classic superhero film featuring Batman.",
    },
    {
      title: "Inception",
      image: "https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg",
      releaseDate: "2010",
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      title: "The Dark Knight",
      image: "https://via.placeholder.com/300x400",
      releaseDate: "2008",
      description: "A classic superhero film featuring Batman.",
    },
    {
      title: "Inception",
      image: "https://via.placeholder.com/300x400",
      releaseDate: "2010",
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      title: "The Dark Knight",
      image: "https://via.placeholder.com/300x400",
      releaseDate: "2008",
      description: "A classic superhero film featuring Batman.",
    },
    // Add more movie objects
  ];

  return (
    <>
      <Navbar />
      <Carousel movies={movies} />
      <ShiftButton />
    </>
  )
}

export default App;
