import MovieCard from './MovieCard';
import type { MoviesData, Genre } from '../types/moviesData';
import { ArrowRight, Film } from 'lucide-react';
import { Link } from 'react-router';

interface Props {
    discoverMovies: MoviesData[],
    genres: Genre[],
    toggleFavorite: (id: number, type: 'movie' | 'series') => void,
    isFavorite: (id: number, type: 'movie' | 'series') => boolean,
}

const DiscoverMovies = ({ discoverMovies, genres, isFavorite, toggleFavorite }: Props) => {

    return (
        <section id='discover-movies' className="mt-15">
            <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                    <Film size={25} className="text-red-500" />
                    <h2 className="text-white text-2xl font-bold">Discover new <span className='text-red-500'>movies</span></h2>
                </div>
                <Link
                    to={'/discover/movies'}
                    className="group flex items-center gap-1 text-sm font-bold uppercase text-red-500 underline underline-offset-6 cursor-pointer"
                >
                    More movies
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                {discoverMovies.map(movie => (
                    <MovieCard key={movie.id} show={movie} genres={genres} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                ))}
            </div>
        </section >
    )
}

export default DiscoverMovies;