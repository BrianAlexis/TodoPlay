import { Play, Info, Star, TrendingUp } from 'lucide-react';

import type { Genre, Result } from '../types/moviesData';

interface Props {
    show: Result,
    genres: Genre[]
}

const MovieCard = ({ show, genres }: Props) => {

    return (
        <div className='group relative rounded-xl overflow-hidden cursor-pointer bg-gray-900 border border-white/10 hover:border-white/25 transition-all duration-300'>

            {/* Poster */}
            <div className="relative aspect-2/3 overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-xs font-semibold">{show.vote_average.toFixed(1)}</span>
                </div>

                {/* HOT badge */}
                <div className="absolute top-2 left-2 bg-red-600 rounded-lg px-2 py-1 flex items-center gap-1">
                    <TrendingUp size={10} className="text-white" />
                    <span className="text-white text-xs font-bold">HOT</span>
                </div>

                {/* Hover overlay con botones */}
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2 mb-2">
                        <button className="flex-1 bg-white text-black text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors">
                            <Play size={12} fill="black" /> Play
                        </button>
                        <button className="w-9 h-8 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Info size={12} className="text-white" />
                        </button>
                    </div>
                    {/* Géneros */}
                    <div className="flex flex-wrap gap-1">
                        {show.genre_ids.slice(0, 2).map(id => {
                            const genre = genres.find(g => g.id === id);
                            return <span key={id} className="text-xs text-gray-300 bg-white/10 rounded-full px-2 py-0.5">{genre?.name}</span>;
                        })}
                    </div>
                </div>
            </div>

            {/* Info debajo del poster */}
            <div className="p-3">
                <h3 className="text-white text-sm font-semibold truncate mb-1">{show.title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">{show.release_date?.slice(0, 4)}</span>
                    <span className="text-gray-600 text-xs">•</span>
                    <span className="text-gray-400 text-xs truncate">
                        {show.genre_ids.slice(0, 1).map(id => genres.find(g => g.id === id)?.name).join('')}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MovieCard