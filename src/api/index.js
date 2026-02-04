import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL.endsWith('/') 
    ? import.meta.env.VITE_TMDB_BASE_URL 
    : `${import.meta.env.VITE_TMDB_BASE_URL}/`,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.api_key = import.meta.env.VITE_TMDB_API_KEY;
  return config;
});

export const getNowPlaying = (page = 1) => api.get('movie/now_playing', { params: { page } });
export const getPopular = (page = 1) => api.get('movie/popular', { params: { page } });
export const getTopRated = (page = 1) => api.get('movie/top_rated', { params: { page } });
export const getUpcoming = (page = 1) => api.get('movie/upcoming', { params: { page } });
export const getGenres = () => api.get('genre/movie/list');
export const getMovieVideos = (movieId) => api.get(`movie/${movieId}/videos`);
export const getTopTVShows = (page = 1) => api.get('tv/top_rated', { params: { page } });
export const getTVVideos = (tvId) => api.get(`tv/${tvId}/videos`);
export const searchMovies = (query, page = 1) => api.get('search/movie', { params: { query, page } });
export const searchTVShows = (query, page = 1) => api.get('search/tv', { params: { query, page } });

export default api;
