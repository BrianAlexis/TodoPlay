import MovieCard from './MovieCard';
import type { MoviesData, Genre } from '../types/moviesData';
import { TrendingUp } from 'lucide-react';

interface Props {
    trendingMovies: MoviesData[],
    genres: Genre[],
    toggleFavorite: (id: number, type: 'movie' | 'tv') => void,
    isFavorite: (id: number, type: 'movie' | 'tv') => boolean,
}

const TrendingMovies = ({ trendingMovies, genres, isFavorite, toggleFavorite }: Props) => {
    console.log(trendingMovies.length)
    return (
        <section id='trending-movies' className="mt-8">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <TrendingUp size={25} className="text-red-600" />
                        <h2 className="text-white text-2xl font-bold">Trending Movies</h2>
                    </div>
                </div>
            </div>

            <div className="overflow-x-hidden pb-2">
                <div className="flex min-w-max gap-4 md:gap-10">
                    {trendingMovies.map(movie => (
                        <div
                            key={movie.id}
                            className="w-[calc((100vw-3.5rem)/2)] min-w-40 max-w-55 sm:w-48 md:w-52 lg:w-56 xl:w-[calc((min(100vw,80rem)-5.5rem)/5)] xl:min-w-50"
                        >
                            <MovieCard show={movie} genres={genres} showHotBadge isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingMovies;