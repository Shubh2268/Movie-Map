import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className='flex justify-center items-center space-x-4 mt-10'>

      {/* Previous Page Button */}
      <button onClick={handlePrevPage} className='text-sm px-3 py-2 rounded-lg border transition-all duration-200 ease-in-out bg-transparent text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white disabled:cursor-not-allowed' disabled={currentPage === 1}>&lt; Prev</button>

      {/* Current Page and Total Pages */}
      <span className='text-sm text-gray-800 dark:text-gray-300'>
        Page {currentPage} / {totalPages}
      </span>

      {/* Next Page Button */}
      <button onClick={handleNextPage} className='text-sm px-3 py-2 rounded-lg border transition-all duration-200 ease-in-out bg-transparent text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white  disabled:cursor-not-allowed' disabled={currentPage === totalPages}
      >Next &gt;</button>

    </div>
  );
};

export default Pagination;
