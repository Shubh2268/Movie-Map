const API_KEY = '4ee1f7c9d418d40e4c6ae1f4d00a80ac';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchData = async (type = 'movie', category = 'popular') => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/${category}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchMedia = (type, category) => fetchData(type, category);
