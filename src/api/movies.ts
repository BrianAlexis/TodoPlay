import type { PopularMoviesData } from '../types/moviesData';
import { tmdb } from './tdbm';

export const getPopularMovies = (page = 1) => tmdb.get<PopularMoviesData>('/movie/popular', { params: { page } });
export const getGenres = () => tmdb.get('/genre/movie/list');
export const getDiscoverMovies = () => tmdb.get('/discover/movies')
export const getTrendingMovies = () => tmdb.get('/trending/all/week')