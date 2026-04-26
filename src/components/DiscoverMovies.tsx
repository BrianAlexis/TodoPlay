import MovieCard from './MovieCard';
import type { MoviesData, Genre } from '../types/moviesData';
import { Film } from 'lucide-react';

interface Props {
    discoverMovies: MoviesData[],
    genres: Genre[]
}

const DiscoverMovies = ({ discoverMovies, genres }: Props) => {
    return (
        <section id='discover-movies' className="mt-15">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                    <Film size={25} className="text-red-500" />
                    <h2 className="text-white text-2xl font-bold"><span className='text-red-500'>Discover</span> new movies</h2>
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                    {discoverMovies.length} movies
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                {discoverMovies.map(movie => (
                    <MovieCard key={movie.id} show={movie} genres={genres} />
                ))}
            </div>
        </section>
    )
}

export default DiscoverMovies;