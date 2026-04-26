import MovieCard from './MovieCard';
import type { MoviesData, Genre } from '../types/moviesData';
import { TrendingUp } from 'lucide-react';

interface Props {
    trendingMovies: MoviesData[],
    genres: Genre[]
}

const TrendingMovies = ({ trendingMovies, genres }: Props) => {
    return (
        <section id='trending-movies' className="mt-8">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <TrendingUp size={25} className="text-red-600" />
                        <h2 className="text-white text-2xl font-bold">Trending Movies</h2>
                    </div>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                    {trendingMovies.length} movies
                </span>
            </div>

            <div className="overflow-x-auto pb-2">
                <div className="flex min-w-max gap-4 md:gap-5">
                    {trendingMovies.map(movie => (
                        <div
                            key={movie.id}
                            className="w-[calc((100vw-3.5rem)/2)] min-w-[160px] max-w-[220px] sm:w-48 md:w-52 lg:w-56 xl:w-[calc((min(100vw,80rem)-5.5rem)/5)] xl:min-w-[200px]"
                        >
                            <MovieCard show={movie} genres={genres} showHotBadge />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingMovies;