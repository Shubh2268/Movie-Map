import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center justify-center text-center text-gray-100 px-4'>
      <h1 className='text-6xl font-semibold text-teal-400 mt-10'>404</h1>
      <h2 className='text-2xl font-semibold my-2'>Page Not Found</h2>
      <p className='text-gray-400 my-2'>
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      <Link to='/' className='inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 my-4 rounded-md transition duration-300'>Go Back to Home</Link>

      <div className='mt-6'>
        <img src='https://t4.ftcdn.net/jpg/08/27/07/03/360_F_827070390_CRMoHgWlEUgRKMDNBUG3tpD6MvMXYTLT.jpg' alt='Page not found' className='rounded-full'/>
      </div>
    </div>
  );
};

export default ErrorPage;
