
import { useEffect, useState } from 'react';
import { getDiscoverMovies, getDiscoverSeries, getGenres, getPopularMovies, getTrendingMovies, getTrendingSeries } from './api/movies';


import type { MoviesData as MovieResult } from './types/moviesData';
import type { Result as SeriesResult } from './types/seriesData';
import FeaturedMovies from './components/FeaturedMovies';
import TrendingMovies from './components/TrendingMovies';
import Navbar from './components/Navbar';
import TrendingSeries from './components/TrendingSeries';
import DiscoverMovies from './components/DiscoverMovies';
import DiscoverSeries from './components/DiscoverSeries';

export default function App() {

  const [popularMovies, setPopularMovies] = useState<MovieResult[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<MovieResult[]>([]);
  const [trendingSeries, setTrendingSeries] = useState<SeriesResult[]>([]);
  const [genres, setGenres] = useState<{ id: number, name: string }[]>([]);
  const [discoverMovies, setDiscoverMovies] = useState<MovieResult[]>([]);
  const [discoverSeries, setDiscoverSeries] = useState<SeriesResult[]>([]);


  useEffect(() => {
    Promise.all([
      getPopularMovies(),
      getGenres(),
      getTrendingMovies(),
      getTrendingSeries(),
      getDiscoverMovies(),
      getDiscoverSeries(),
    ]).then(([moviesRes, genresRes, trendingMoviesRes, trendingSeriesRes, discoverMoviesRes, discoverSeriesRes]) => {
      setPopularMovies(moviesRes.data.results);
      setGenres(genresRes.data.genres);
      setTrendingMovies(trendingMoviesRes.data.results)
      setTrendingSeries(trendingSeriesRes.data.results)
      setDiscoverMovies(discoverMoviesRes.data.results)
      setDiscoverSeries(discoverSeriesRes.data.results)
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#090b14] text-white">
      <div className="mx-auto w-full max-w-400 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Navbar />
        <FeaturedMovies popularMovies={popularMovies} genres={genres} />
        <TrendingMovies trendingMovies={trendingMovies} genres={genres} />
        <TrendingSeries trendingSeries={trendingSeries} genres={genres} />
        <DiscoverMovies discoverMovies={discoverMovies} genres={genres} />
        <DiscoverSeries discoverSeries={discoverSeries} genres={genres} />
      </div>
    </main>
  );
}
