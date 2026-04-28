import MovieCard from './MovieCard';
import type { Result as SeriesResult } from '../types/seriesData';
import type { Genre } from '../types/moviesData';
import { Film } from 'lucide-react';

interface Props {
    discoverSeries: SeriesResult[],
    genres: Genre[]
}

const DiscoverSeries = ({ discoverSeries, genres }: Props) => {
    return (
        <section id='discover-series' className="mt-15">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <Film size={25} className="text-red-500" />
                        <h2 className="text-white text-2xl font-bold"><span className='text-red-500'>Discover</span> new series</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
                {discoverSeries.map(series => (
                    <MovieCard key={series.id} show={series} genres={genres} />
                ))}
            </div>
        </section>
    )
}

export default DiscoverSeries;