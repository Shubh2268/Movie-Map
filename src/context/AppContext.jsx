import React, { createContext, useState, useCallback } from 'react';
import { fetchMedia as fetchMediaFunction } from '../fetchData/FetchMedia';
import { fetchDetails as fetchDetailsFunction } from '../fetchData/FetchDetails';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [mediaType, setMediaType] = useState('movie');
  const [category, setCategory] = useState('popular');
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch the list of movies/TV shows
  const fetchMedia = useCallback(async (type = 'movie', selectedCategory = 'popular') => {
    setLoading(true);
    try {
      const data = await fetchMediaFunction(type, selectedCategory);
      setMedia(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch media data.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to fetch details of a specific movie/TV show
  const fetchDetails = useCallback(async (type = 'movie', id) => {
    setLoading(true);
    try {
      const data = await fetchDetailsFunction(type, id);
      setDetails(data);
      setError(null);
    } catch (err) {
      console.error(err); // Log the error for debugging
      setError('Failed to fetch details.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        media,
        mediaType,
        category,
        details,
        loading,
        error,
        setMediaType,
        setCategory,
        fetchMedia,
        fetchDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
