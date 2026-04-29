import type { PopularMoviesData } from '../types/moviesData';
import { tmdb } from './tdbm';

export const getPopularMovies = (page = 1) => tmdb.get<PopularMoviesData>('/movie/popular', { params: { page } });
export const getGenres = () => tmdb.get('/genre/movie/list');
export const getDiscoverMovies = (page = 1) => tmdb.get('/discover/movie', { params: { page, sort_by: 'popularity.desc' } });
export const getDiscoverSeries = (page = 1) => tmdb.get('/discover/tv', { params: { page, sort_by: 'popularity.desc' } });
export const getTrendingMovies = () => tmdb.get('/trending/movie/week')
export const getTrendingSeries = () => tmdb.get('/trending/tv/week')
export const getMovieVideos = (id: number) => tmdb.get(`/movie/${id}/videos`);
export const getSeriesVideos = (id: number) => tmdb.get(`/tv/${id}/videos`);
export const getMovieDetail = (id: number) => tmdb.get(`/movie/${id}`, { params: { append_to_response: 'videos,credits' } });
export const getSerieDetail = (id: number) => tmdb.get(`/tv/${id}`, { params: { append_to_response: 'videos,credits' } });