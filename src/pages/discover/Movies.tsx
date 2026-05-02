import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getMoviesGenres, getDiscoverMovies } from '../../api/moviesAndSeries';

import MovieCard from '../../components/MovieCard';

import useFavorites from '../../hooks/useFavorites';
import type { MoviesData, GenreMovieData } from '../../types/moviesData';
import BackButton from '../../components/ui/BackButton';
import FilterDropdown from '../../components/ui/FilterDropdown';

import getYearOptions from '../../utils/years'

const Movies = () => {
    const [movies, setMovies] = useState<MoviesData[]>([]);
    const { toggleFavorite, isFavorite } = useFavorites();

    const [page, setPage] = useState(1);
    const [, setTotalPages] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    const { data: genresData } = useQuery<GenreMovieData>({
        queryKey: ['genres'],
        queryFn: () => getMoviesGenres().then(res => res.data),
        staleTime: 1000 * 60 * 60
    });

    const genres = genresData?.genres ?? [];

    useEffect(() => {
        let active = true;
        const isFirstPage = page === 1;

        getDiscoverMovies(page, selectedGenre, selectedYear).then(res => {
            if (!active) return;
            setMovies(prev => {
                const results = res.data.results;
                const newMovies = results.filter(
                    (movie: MoviesData) => !prev.some(m => m.id === movie.id)
                );
                return isFirstPage ? results : [...prev, ...newMovies];
            });
            setTotalPages(res.data.total_pages);
            setIsLoading(false);
        });

        return () => { active = false; };
    }, [page, selectedGenre, selectedYear]);

    return (
        <div className='mx-auto w-full max-w-400 px-4 pb-12 pt-6 sm:px-6 lg:px-8 place-items-center' >
            <BackButton />
            <h2 className='mb-7 mt-15 md:mt-0.5 text-3xl font-black leading-tight text-white md:text-5xl text-center'>All our <span className='text-red-500'>movies</span></h2>

            <div className="flex items-center gap-3 mb-6">
                <FilterDropdown
                    label="Genre"
                    options={genres}
                    selected={selectedGenre}
                    onSelect={(id) => { setSelectedGenre(id as number | null); setPage(1); }}
                />
                <FilterDropdown
                    label="Year"
                    options={getYearOptions()}
                    selected={selectedYear}
                    onSelect={(id) => { setSelectedYear(id as number | null); setPage(1); }}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                {movies.map(movie => (
                    <MovieCard key={movie.id} show={movie} genres={genres} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                ))}
            </div>
            <button
                onClick={() => { setIsLoading(true); setPage(page + 1); }}
                disabled={isLoading}
                className="flex mt-5 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-500 cursor-pointer disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <>
                        Loading...
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 14 0 22 12h-4a8 8 0 01-8-8z" />
                        </svg>
                    </>
                ) : 'Load more'}
            </button>
        </div >
    );
}

export default Movies;