const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMediaFunction = async (type = 'movie', category = 'popular', page = 1) => {
  const response = await fetch(`${BASE_URL}/${type}/${category}?api_key=${API_KEY}&page=${page}`);
  
  if (!response.ok) throw new Error('Failed to fetch data');
  
  const data = await response.json();
  
  return {
    results: data.results || [],
    total_pages: data.total_pages || 1,
  };
};

export default fetchMediaFunction;
