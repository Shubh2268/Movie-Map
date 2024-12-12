import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center justify-center text-center text-gray-100 px-4'>
      <h1 className='text-6xl font-bold text-teal-400 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
      <p className='text-gray-400 mb-6'>
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      <Link to='/' className='inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300'>Go Back to Home</Link>

      {/* <div className='mt-8'>
        <img
          src='https://via.placeholder.com/400x200?text=Lost+in+the+Universe' 
          alt='Page not found'
          className='rounded-lg shadow-md border border-gray-700'
        />
      </div> */}
    </div>
  );
};

export default ErrorPage;
