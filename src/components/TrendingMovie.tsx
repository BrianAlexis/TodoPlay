import MovieCard from './MovieCard';
import type { Result, Genre } from '../types/moviesData';

interface Props {
    trendingMovies: Result[],
    genres: Genre[]
}

const TrendingMovies = ({ trendingMovies, genres }: Props) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 m-5">
            {trendingMovies.slice(0, 10).map(movie => (
                <MovieCard key={movie.id} show={movie} genres={genres} />
            ))}
        </div>
    )
}

export default TrendingMovies;