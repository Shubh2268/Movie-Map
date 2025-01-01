import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className='flex justify-center items-center space-x-4 mt-8'>
      <button
        onClick={handlePrevPage}
        className='px-4 py-2 bg-teal-500 text-white rounded-md disabled:opacity-50'
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className='text-xl'>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNextPage}
        className='px-4 py-2 bg-teal-500 text-white rounded-md disabled:opacity-50'
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
