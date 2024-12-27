import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card'; 

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { fetchSearchMedia, media, loading, error } = useContext(AppContext);

  useEffect(() => {
    if (query) {
      fetchSearchMedia(query);
    }
  }, [query, fetchSearchMedia]);

  return (
    <div className='container mx-auto my-5 md:my-10 p-10'>
      <h1 className='text-lg md:text-2xl font-medium text-gray-300 text-center my-5'>results for : <span className='text-teal-300'>'{query}'</span></h1>

      {loading && <p className='text-gray-400 text-center'>Loading...</p>}
      {error && <p className='text-gray-400 text-center'>{error}</p>}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5 md:mt-10'>
        {media.length > 0 ? (
          media.map((item) => <Card key={item.id} media={item} />)
        ) : (
          !loading && <p className='text-gray-400 text-center'>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
