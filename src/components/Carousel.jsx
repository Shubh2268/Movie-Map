import React, { useState } from 'react';

const Carousel = ({ movies }) => {

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

    return (
        <div className='relative w-full overflow-hidden'>
            {/* Carousel container */}
            <div className='flex transition-transform duration-500'
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {movies.map((movie, index) => (
                    <div key={index} className='flex-shrink-0 w-full h-1/2'>
                        <div className='bg-gray-800 text-white shadow-lg p-4'>
                            <img src={movie.image} alt={movie.title} className='w-full h-80 object-cover'/>
                            <h3 className='text-lg font-semibold mt-2'>{movie.title}</h3>
                            <p className='text-sm text-gray-400 mt-1'>{movie.releaseDate}</p>
                            <p className='mt-2 text-sm'>{movie.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700'
                onClick={prevSlide}>&#10094;</button>
            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700' onClick={nextSlide}>&#10095;</button>

            {/* Indicators */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {movies.map((_, index) => (
                    <button key={index} className={`w-2 h-2 rounded-full ${index ===currentIndex ? 'bg-cyan-400' : 'bg-gray-400'}`} onClick={() => setCurrentIndex(index)}></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
