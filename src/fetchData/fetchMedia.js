const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMedia = async (type = 'movie', category = 'popular') => {
  const response = await fetch(`${BASE_URL}/${type}/${category}?api_key=${API_KEY}`);
  
  if (!response.ok) throw new Error('Failed to fetch data');
  
  const data = await response.json();
  return data.results || [];
};
