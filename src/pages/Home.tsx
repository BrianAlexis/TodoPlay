import { useQuery } from '@tanstack/react-query';
import { getDiscoverMovies, getDiscoverSeries, getGenres, getPopularMovies, getTrendingMovies, getTrendingSeries } from '../api/moviesAndSeries';

import useFavorites from '../hooks/useFavorites';

import type { PopularMoviesData, GenreMovieData } from '../types/moviesData';
import type { MoviesData as MovieResult } from '../types/moviesData';
import type { Result as SeriesResult, SeriesData } from '../types/seriesData';

import FeaturedMovie from '../components/FeaturedMovie';
import TrendingMovies from '../components/TrendingMovies';
import Navbar from '../components/Navbar';
import TrendingSeries from '../components/TrendingSeries';
import DiscoverMovies from '../components/DiscoverMovies';
import DiscoverSeries from '../components/DiscoverSeries';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {

    const { toggleFavorite, isFavorite } = useFavorites();

    const { data: popularMoviesData, isLoading: isLoadingPopular } = useQuery<PopularMoviesData>({
        queryKey: ['popularMovies'],
        queryFn: () => getPopularMovies().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const { data: genresData, isLoading: isLoadingGenres } = useQuery<GenreMovieData>({
        queryKey: ['genres'],
        queryFn: () => getGenres().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const { data: trendingMoviesData, isLoading: isLoadingTrendingMovies } = useQuery<PopularMoviesData>({
        queryKey: ['trendingMovies'],
        queryFn: () => getTrendingMovies().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const { data: trendingSeriesData, isLoading: isLoadingTrendingSeries } = useQuery<SeriesData>({
        queryKey: ['trendingSeries'],
        queryFn: () => getTrendingSeries().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const { data: discoverMoviesData, isLoading: isLoadingDiscoverMovies } = useQuery<PopularMoviesData>({
        queryKey: ['discoverMovies'],
        queryFn: () => getDiscoverMovies().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const { data: discoverSeriesData, isLoading: isLoadingDiscoverSeries } = useQuery<SeriesData>({
        queryKey: ['discoverSeries'],
        queryFn: () => getDiscoverSeries().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const isLoading =
        isLoadingPopular ||
        isLoadingGenres ||
        isLoadingTrendingMovies ||
        isLoadingTrendingSeries ||
        isLoadingDiscoverMovies ||
        isLoadingDiscoverSeries;

    const popularMovies: MovieResult[] = popularMoviesData?.results ?? [];
    const genres = genresData?.genres ?? [];
    const trendingMovies: MovieResult[] = trendingMoviesData?.results.slice(0, 6) ?? [];
    const trendingSeries: SeriesResult[] = trendingSeriesData?.results.slice(0, 6) ?? [];
    const discoverMovies: MovieResult[] = discoverMoviesData?.results.slice(0, 10) ?? [];
    const discoverSeries: SeriesResult[] = discoverSeriesData?.results.slice(0, 10) ?? [];

    if (isLoading) return <LoadingScreen />;

    return (
        <main className="min-h-screen bg-[#090b14] text-white">
            <div className="mx-auto w-full max-w-400 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
                <Navbar />
                <FeaturedMovie popularMovies={popularMovies} genres={genres} />
                <TrendingMovies trendingMovies={trendingMovies} genres={genres} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                <TrendingSeries trendingSeries={trendingSeries} genres={genres} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                <DiscoverMovies discoverMovies={discoverMovies} genres={genres} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
                <DiscoverSeries discoverSeries={discoverSeries} genres={genres} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
            </div>
        </main>
    );
}