const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchSearchMedia = async (query, type = 'movie') => {
  const response = await fetch(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  
  if (!response.ok) throw new Error('Failed to fetch search results');
  
  const data = await response.json();
  return data.results || [];
};
