import type { PopularMoviesData } from '../types/moviesData';
import { tmdb } from './tdbm';

export const getPopularMovies = (page = 1) => tmdb.get<PopularMoviesData>('/movie/popular', { params: { page } });
export const getGenres = () => tmdb.get('/genre/movie/list');
export const getDiscoverMovies = () => tmdb.get('/discover/movie')
export const getDiscoverSeries = () => tmdb.get('/discover/tv')
export const getTrendingMovies = () => tmdb.get('/trending/movie/week')
export const getTrendingSeries = () => tmdb.get('/trending/tv/week')
export const getMovieVideos = (id: number) => tmdb.get(`/movie/${id}/videos`);
export const getSeriesVideos = (id: number) => tmdb.get(`/tv/${id}/videos`);