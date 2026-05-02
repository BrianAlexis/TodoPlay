import type { PopularMoviesData } from '../types/moviesData';
import { tmdb } from './tdbm';

export const getPopularMovies = (page = 1) => tmdb.get<PopularMoviesData>('/movie/popular', { params: { page } });
export const getMoviesGenres = () => tmdb.get('/genre/movie/list');
export const getSeriesGenres = () => tmdb.get('/genre/tv/list');
export const getDiscoverMovies = (page = 1, genreId?: number | null, year?: number | null) => tmdb.get('/discover/movie', { params: { page, sort_by: 'popularity.desc', ...(genreId && { with_genres: genreId }), ...(year && { primary_release_year: year }) } });
export const getDiscoverSeries = (page = 1, genreId?: number | null, year?: number | null) => tmdb.get('/discover/tv', { params: { page, sort_by: 'popularity.desc', ...(genreId && { with_genres: genreId }), ...(year && { first_air_date_year: year }) } });
export const getTrendingMovies = () => tmdb.get('/trending/movie/week')
export const getTrendingSeries = () => tmdb.get('/trending/tv/week')
export const getMovieVideos = (id: number) => tmdb.get(`/movie/${id}/videos`);
export const getSeriesVideos = (id: number) => tmdb.get(`/tv/${id}/videos`);
export const getMovieDetail = (id: number) => tmdb.get(`/movie/${id}`, { params: { append_to_response: 'videos,credits' } });
export const getSerieDetail = (id: number) => tmdb.get(`/tv/${id}`, { params: { append_to_response: 'videos,credits' } });