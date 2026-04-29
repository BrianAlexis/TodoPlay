import { useEffect, useState } from 'react';

import { getDiscoverSeries } from '../../api/moviesAndSeries';
import { getGenres } from '../../api/moviesAndSeries';

import MovieCard from '../../components/MovieCard';

import useFavorites from '../../hooks/useFavorites';
import type { Result, Genre } from '../../types/seriesData';
import BackButton from '../../components/ui/BackButton';

const Series = () => {

    const [series, setSeries] = useState<Result[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const { toggleFavorite, isFavorite } = useFavorites();
    const [page, setPage] = useState(1);
    const [, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        let active = true;

        getDiscoverSeries(page).then(res => {
            if (!active) return;
            setSeries(prev => {
                const newMovies = res.data.results.filter(
                    (serie: Result) => !prev.some(s => s.id === serie.id)
                );
                return [...prev, ...newMovies];
            });
            setTotalPages(res.data.total_pages);
            setIsLoading(false);
        });

        return () => { active = false; };
    }, [page]);

    useEffect(() => {
        getGenres().then(res => setGenres(res.data.genres));
    }, []);


    return (
        <div className='mx-auto w-full max-w-400 px-4 pb-12 pt-6 sm:px-6 lg:px-8 place-items-center'>

            <BackButton />

            <h2 className='mb-10 mt-15 md:mt-0.5 text-3xl font-black leading-tight text-white md:text-5xl text-center'>All our <span className='text-red-500'>series</span></h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                {series.map(serie => (
                    <MovieCard key={serie.id} show={serie} genres={genres} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
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
        </div>
    );
}

export default Series;