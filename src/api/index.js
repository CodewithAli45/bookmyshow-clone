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

export const getNowPlaying = () => api.get('movie/now_playing');
export const getPopular = () => api.get('movie/popular');
export const getTopRated = () => api.get('movie/top_rated');
export const getUpcoming = () => api.get('movie/upcoming');
export const getGenres = () => api.get('genre/movie/list');

export default api;
