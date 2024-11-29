import React, { useEffect, useState } from 'react';

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

                {movies.map((movie, index) => (
                    <div key={index} className='flex-shrink-0 w-full h-[85vh] relative'>
                        <img src={movie.image} alt={movie.title} className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'>
                            <div className='absolute bottom-4 left-4 text-white space-y-2'>
                                <h3 className='text-2xl font-bold'>{movie.title}</h3>
                                <p className='text-sm text-gray-300'>{movie.releaseDate}</p>
                                <p className='text-sm text-gray-400 line-clamp-3'>{movie.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Navigation Buttons */}
            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-75 transition' onClick={prevSlide}>&#10094;</button>
            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-75 transition' onClick={nextSlide}>&#10095;</button>

            {/* Indicators */}
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {movies.map((_, index) => (
                    <button key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-cyan-400' : 'bg-gray-400'} transition`} onClick={() => setCurrentIndex(index)}></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
