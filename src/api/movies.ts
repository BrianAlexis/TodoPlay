import { tmdb } from './tdbm';

export const getPopularMovies = (page = 1) => tmdb.get('/movie/popular', { params: { page } });