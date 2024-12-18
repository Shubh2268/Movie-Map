import React, { createContext, useState } from 'react';
import { fetchMedia as fetchMediaFunction } from '../fetchData/FetchMedia';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [mediaType, setMediaType] = useState('movie');
  const [category, setCategory] = useState('popular');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMedia = async (type, selectedCategory) => {
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
  };

  return (
    <AppContext.Provider
      value={{
        media,
        mediaType,
        category,
        setMediaType,
        setCategory,
        fetchMedia,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
