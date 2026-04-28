import { useState } from 'react';
import { useNavigate } from 'react-router';

import { Play, Info, Star, TrendingUp, Heart } from 'lucide-react';

import type { Genre, MoviesData as MovieResult } from '../types/moviesData';
import type { Result as SeriesResult } from '../types/seriesData';

import usePlayTrailer from '../hooks/usePlayTrailer';

import TrailerModal from './TrailerModal';

interface Props {
    show: MovieResult | SeriesResult,
    genres: Genre[],
    showHotBadge?: boolean
}

const MovieCard = ({ show, genres, showHotBadge = false }: Props) => {

    const navigate = useNavigate()

    const [trailerKey, setTrailerKey] = useState<string | null>(null);
    const isMovie = 'title' in show;

    const { handlePlayTrailer, isLoadingTrailer, trailerError } = usePlayTrailer({
        id: show.id,
        isMovie,
        setTrailerKey,
    });

    const showTitle = 'title' in show ? show.title : show.name;
    const showReleaseDate = 'release_date' in show ? show.release_date : show.first_air_date;

    return (
        <article className='group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-xl hover:shadow-black/30' onClick={() => navigate(`/${show.media_type === 'tv' ? 'series' : 'movie'}/${show.id}`)}>

            <div className="relative aspect-2/3 overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={showTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent" />

                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-black/70 px-2 py-1 backdrop-blur-sm">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-xs font-semibold">{show.vote_average.toFixed(1)}</span>
                </div>

                {showHotBadge && (
                    <div className="absolute left-2 top-2 flex items-center gap-1 rounded-lg bg-red-600 px-2 py-1">
                        <TrendingUp size={10} className="text-white" />
                        <span className="text-white text-xs font-bold">HOT</span>
                    </div>
                )}

                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <div className="flex gap-2 mb-2">
                        <button
                            type="button"
                            onClick={handlePlayTrailer}
                            disabled={isLoadingTrailer}
                            className="flex-1 bg-white text-black text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <Play size={12} fill="black" /> {isLoadingTrailer ? 'Loading...' : 'Watch trailer'}
                        </button>
                        <button className="w-9 h-8 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Info size={12} className="text-white" />
                        </button>
                    </div>
                    {trailerError && (
                        <p className="mb-2 text-[11px] leading-tight text-red-300">{trailerError}</p>
                    )}
                    <div className="flex flex-wrap gap-1">
                        {show.genre_ids.slice(0, 2).map(id => {
                            const genre = genres.find(g => g.id === id);
                            return <span key={id} className="text-xs text-gray-300 bg-white/10 rounded-full px-2 py-0.5">{genre?.name}</span>;
                        })}
                    </div>
                </div>
            </div>

            <div className="p-3">
                <h3 className="mb-1 truncate text-sm font-semibold text-white">{showTitle}</h3>
                <Heart size={20} className='cursor-pointer' />
                <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">{String(showReleaseDate).slice(0, 4)}</span>
                    <span className="text-gray-600 text-xs">•</span>
                    <span className="text-gray-400 text-xs truncate">
                        {show.genre_ids.slice(0, 1).map(id => genres.find(g => g.id === id)?.name).join('')}
                    </span>
                </div>
            </div>
            <TrailerModal trailerKey={trailerKey} onClose={() => setTrailerKey(null)} />
        </article>
    )
}
export default MovieCard