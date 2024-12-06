import React, { createContext, useState, useEffect } from 'react';
import { fetchMovies, fetchTVShows } from '../fetchData/fetchData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState({ movies: false, tvShows: false });
  const [error, setError] = useState({ movies: null, tvShows: null });

  
  const fetchData = async (fetchFunction, setState) => {
    try {
      setLoading(true);
      setError(null);
  
      const data = await fetchFunction();
      setState(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  // Fetch Movies and TV Shows
  useEffect(() => {
    fetchData(fetchMovies, setMovies, 'movies');
    fetchData(fetchTVShows, setTVShows, 'tvShows');
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies,
        tvShows,
        loading,
        error,
        refreshMovies: () => fetchData(fetchMovies, setMovies, 'movies'),
        refreshTVShows: () => fetchData(fetchTVShows, setTVShows, 'tvShows'),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
