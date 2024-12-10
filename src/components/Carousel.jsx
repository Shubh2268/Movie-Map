import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../fetchData/fetchData';

const Carousel = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMedia = async () => {
          setMovies(await fetchMovies());
        };
    
        loadMedia();
      }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === movies.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? movies.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='relative w-full overflow-hidden'>
            {/* Carousel container */}
            <div className='flex transition-transform ease-in-out duration-700' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

                {movies.map((movie) => (
                    <div key={movie.id} className='flex-shrink-0 w-full h-[60vh] lg:h-[85vh] relative'>
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'>
                            <div className='w-full absolute bottom-5 left-4 max-w-md px-4 text-gray-300'>
                                <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl text-gray-100 drop-shadow-2xl'>{movie.title}</h3>
                                <p className='text-ellipsis line-clamp-3 text-sm md:text-base my-2'>{movie.overview}</p>
                                <div className='flex items-center gap-4 text-sm md:text-base'>
                                    <p>Rating : {Number(movie.vote_average).toFixed(1)}+</p>
                                    <span>|</span>
                                    <p>View : {Number(movie.popularity).toFixed(0)}</p>
                                </div>
                                <p className='py-1 text-sm md:text-base'>Release Date : {movie.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Navigation Buttons */}
            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-sm md:text-base text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-75 transition' onClick={prevSlide}>&#10094;</button>
            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-sm md:text-base text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-75 transition' onClick={nextSlide}>&#10095;</button>

            {/* Indicators */}
            <div className='absolute bottom-1 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2'>
                {movies.map((_, index) => (
                    <button key={index} className={`w-1 md:w-2 h-1 md:h-2 rounded-full ${index === currentIndex ? 'bg-teal-500' : 'bg-gray-400'} transition`} onClick={() => setCurrentIndex(index)}></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
