const API_KEY=process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL="http://api.themoviedb.org/3";

const requests ={
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
  fetchComedyMovies: BASE_URL + '/discover/movie?api_key=' + API_KEY + '&language=en-US&with_genres=35',
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
  fetchMostPopularMovies: `${BASE_URL}/popular?api_key=${API_KEY}`,
  fetchUpcoming:`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US`
  
}

export default requests;
