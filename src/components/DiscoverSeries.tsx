import MovieCard from './MovieCard';
import type { Result as SeriesResult } from '../types/seriesData';
import type { Genre } from '../types/seriesData';
import { ArrowRight, Film } from 'lucide-react';
import { Link } from 'react-router';

interface Props {
    discoverSeries: SeriesResult[],
    genres: Genre[],
    toggleFavorite: (id: number, type: 'movie' | 'series') => void,
    isFavorite: (id: number, type: 'movie' | 'series') => boolean,
}

const DiscoverSeries = ({ discoverSeries, genres, isFavorite, toggleFavorite }: Props) => {

    return (
        <section id='discover-series' className="mt-15">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <Film size={25} className="text-red-500" />
                        <h2 className="text-white text-2xl font-bold"><span className='text-red-500'>Discover</span> new series</h2>
                    </div>
                </div>
                <Link
                    to={'/discover/series'}
                    className="group flex items-center gap-1 text-xs font-bold uppercase text-red-500 underline underline-offset-6 cursor-pointer"
                >
                    More series
                    <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                {discoverSeries.map(series => (
                    <MovieCard key={series.id} show={series} genres={genres} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                ))}
            </div>
        </section>
    )
}

export default DiscoverSeries;