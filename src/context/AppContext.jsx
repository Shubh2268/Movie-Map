import React, { createContext, useState, useEffect } from 'react';
import { fetchMedia } from '../fetchData/FetchMedia';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [media, setMedia] = useState([]); // Media data
  const [mediaType, setMediaType] = useState('movie'); // Current media type ('movie' or 'tv')
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch media data based on type
  const fetchData = async (type) => {
    try {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state
      const data = await fetchMedia(type); // Fetch data
      setMedia(data); // Update media state
    } catch (err) {
      setError(err.message); // Capture error
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Fetch data whenever mediaType changes
  useEffect(() => {
    fetchData(mediaType);
  }, [mediaType]);

  return (
    <AppContext.Provider
      value={{
        media,        // List of media (movies/TV shows)
        mediaType,    // Current media type
        loading,      // Loading state
        error,        // Error state
        setMediaType, // Function to update mediaType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
