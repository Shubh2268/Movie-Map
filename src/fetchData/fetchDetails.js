const API_KEY = '4ee1f7c9d418d40e4c6ae1f4d00a80ac';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchDetails = async (type = 'movie', id) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Failed to fetch details');
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error('Error fetching details:', error);
    return null;
  }
};
