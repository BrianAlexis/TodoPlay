
import { useEffect, useState } from 'react';
import { getGenres, getPopularMovies, getTrendingMovies } from './api/movies';
import type { Result } from './types/moviesData';
import FeaturedMovies from './components/FeaturedMovies';
import TrendingMovies from './components/TrendingMovie';

export default function App() {

  const [popularMovies, setPopularMovies] = useState<Result[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Result[]>([]);
  const [genres, setGenres] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    Promise.all([getPopularMovies(), getGenres(), getTrendingMovies()]).then(([moviesRes, genresRes]) => {
      setPopularMovies(moviesRes.data.results);
      setGenres(genresRes.data.genres);
      setTrendingMovies(moviesRes.data.results)
    });
  }, []);


  return (
    <>
      <FeaturedMovies popularMovies={popularMovies} genres={genres} />
      <TrendingMovies trendingMovies={trendingMovies} genres={genres} />
    </>
  );
}
