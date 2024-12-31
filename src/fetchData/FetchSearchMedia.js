const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchSearchMediaFunction = async (query, type = 'movie', page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );
  
  if (!response.ok) throw new Error('Failed to fetch search results');
  
  const data = await response.json();
  
  return {
    results: data.results || [],
    total_pages: data.total_pages || 1,
  };
};
