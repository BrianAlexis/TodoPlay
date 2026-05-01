import MovieCard from './MovieCard';
import type { Result as SeriesResult } from '../types/seriesData';
import type { Genre } from '../types/moviesData';
import { TrendingUp } from 'lucide-react';

interface Props {
    trendingSeries: SeriesResult[],
    genres: Genre[],
    toggleFavorite: (id: number, type: 'movie' | 'series') => void,
    isFavorite: (id: number, type: 'movie' | 'series') => boolean,
}

const TrendingSeries = ({ trendingSeries, genres, isFavorite, toggleFavorite }: Props) => {
    return (
        <section id='trending-series' className="mt-8">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <TrendingUp size={20} className="text-red-600" />
                        <h2 className="text-white text-2xl font-bold">Trending <span className='text-red-500'>Series</span></h2>
                    </div>
                </div>
            </div>

            <div className="overflow-x-hidden pb-2">
                <div className="flex min-w-max gap-4 md:gap-10">
                    {trendingSeries.map(series => (
                        <div
                            key={series.id}
                            className="w-[calc((100vw-3.5rem)/2)] min-w-40 max-w-55 sm:w-48 md:w-52 lg:w-56 xl:w-[calc((min(100vw,80rem)-5.5rem)/5)] xl:min-w-50"
                        >
                            <MovieCard show={series} genres={genres} showHotBadge isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingSeries;