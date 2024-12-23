const API_KEY = '4ee1f7c9d418d40e4c6ae1f4d00a80ac';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchDetails = async (type = 'movie', id) => {

  const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
  const detailsData = await response.json();

  const creditsResponse = await fetch(`${BASE_URL}/${type}/${id}/credits?api_key=${API_KEY}`);
  const creditsData = await creditsResponse.json();

  // Extract director(s) and writer(s)
  const director = creditsData.crew.filter((person) => person.job === 'Director').map((person) => person.name).join(', ') || 'N/A';
  const writers = creditsData.crew.filter((person) => person.job === 'Writer' || person.department === 'Writing').map((person) => person.name).join(', ') || 'N/A';

   // Extract cast information
   const cast = creditsData.cast.map((actor) => ({id: actor.id, name: actor.name, profile_path: actor.profile_path}));

  return {
    ...detailsData,
    director,
    writers,
    cast 
  };
};
