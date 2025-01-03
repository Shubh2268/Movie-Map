const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchRelatedMediaFunction = async (type = 'movie', id) => {
  const response = await fetch(`${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}`);
  
  if (!response.ok) throw new Error('Failed to fetch related media');
  
  const data = await response.json();
  return data.results || [];
};
