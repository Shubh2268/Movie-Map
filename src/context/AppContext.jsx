import React, { createContext, useState, useEffect } from 'react';
import { fetchMovies, fetchTVShows } from '../api/API';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Movies
  const getMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchMovies();
      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch TV Shows
  const getTVShows = async () => {
    setLoading(true);
    try {
      const data = await fetchTVShows();
      setTVShows(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
    getTVShows();
  }, []);

  return (
    <AppContext.Provider value={{ movies, tvShows, loading, error, getMovies, getTVShows }}>
      {children}
    </AppContext.Provider>
  );
};
