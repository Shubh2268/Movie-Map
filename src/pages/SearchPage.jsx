import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { fetchSearchMedia, media, loading, error, currentPage, totalPages } = useContext(AppContext);

  useEffect(() => {
    if (query) {
      fetchSearchMedia(query, 'movie', 1);
    }
  }, [query, fetchSearchMedia]);

  const handlePageChange = (newPage) => {
    fetchSearchMedia(query, 'movie', newPage);
  };

  return (
    <div className='container mx-auto py-5 md:py-10 px-10 dark:bg-black min-h-screen'>
      <h1 className='text-lg md:text-2xl font-medium text-gray-500 dark:text-gray-300 text-center pt-14'>
        Results for: <span className='text-teal-500 dark:text-teal-300'>'{query}'</span>
      </h1>

      {loading && <p className='text-gray-400 text-center'>Loading...</p>}
      {error && <p className='text-gray-400 text-center'>{error}</p>}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 md:pt-10'>
        {media.length > 0 ? (
          media.map((item) => <Card key={item.id} media={item} />)
        ) : (
          !loading && <p className='text-gray-300 text-center'>No results found.</p>
        )}
      </div>

      {/* Pagination Component */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchPage;
