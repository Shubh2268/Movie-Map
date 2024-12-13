import React, { createContext, useState, useEffect } from 'react';
import { fetchMedia } from '../fetchData/FetchMedia';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [mediaType, setMediaType] = useState('movie');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (type) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMedia(type);
      setMedia(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(mediaType);
  }, [mediaType]);

  return (
    <AppContext.Provider
      value={{
        media,
        mediaType,
        loading,
        error,
        setMediaType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
