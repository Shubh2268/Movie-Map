import React, { createContext, useState, useCallback, useEffect } from 'react';
import { fetchMediaFunction } from '../fetchData/FetchMedia.js';
import { fetchDetailsFunction } from '../fetchData/FetchDetails.js';
import { fetchSearchMediaFunction } from '../fetchData/FetchSearchMedia.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [mediaType, setMediaType] = useState('movie');
  const [category, setCategory] = useState('popular');
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Theme state and toggle function
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to fetch the list of movies/TV shows
  const fetchMedia = useCallback(async (type = 'movie', selectedCategory = 'popular', page = 1) => {
    setLoading(true);
    try {
      const data = await fetchMediaFunction(type, selectedCategory, page);
      setMedia(data.results);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
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
      setError('Failed to fetch details.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to search for movies/TV shows
  const fetchSearchMedia = useCallback(async (query, type = 'movie', page = 1) => {
    setLoading(true);
    try {
      const data = await fetchSearchMediaFunction(query, type, page);
      setMedia(data.results);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
      setError(null);
    } catch (err) {
      setError('Failed to fetch search results.');
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
        theme,
        toggleTheme,
        currentPage,
        totalPages,
        setMediaType,
        setCategory,
        fetchMedia,
        fetchDetails,
        fetchSearchMedia,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
