const API_KEY = '4ee1f7c9d418d40e4c6ae1f4d00a80ac';
const BASE_URL = 'https://api.themoviedb.org/3';


const fetchData = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
};

export const fetchMovies = () => fetchData('movie');
export const fetchTVShows = () => fetchData('tv');
