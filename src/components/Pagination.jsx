import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <div className='flex justify-center items-center mt-8'>

            <button className={`px-4 py-2 mx-1 text-sm font-medium border rounded-lg bg-gray-300 dark:bg-gray-600 dark:text-gray-200 ${isFirstPage ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`} disabled={isFirstPage} onClick={() => onPageChange(currentPage - 1)}>Previous</button>

            <span className='px-4 text-sm font-medium dark:text-gray-300'>
                Page {currentPage} of {totalPages}
            </span>

            <button className={`px-4 py-2 mx-1 text-sm font-medium border rounded-lg bg-gray-300 dark:bg-gray-600 dark:text-gray-200 ${isLastPage ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`} disabled={isLastPage} onClick={() => onPageChange(currentPage + 1)}>Next</button>

        </div>
    );
};

export default Pagination;
