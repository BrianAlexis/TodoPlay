import { Heart, Star, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { MovieDetailData } from '../types/moviesData';
import type { SeriesDetailData } from '../types/seriesData';

interface Props {
    item: MovieDetailData | SeriesDetailData;
    toggleFavorite: (id: number, type: 'movie' | 'series') => void;
}

const FavoriteCard = ({ item, toggleFavorite }: Props) => {
    const navigate = useNavigate();
    const isMovie = 'title' in item;
    const type = isMovie ? 'movie' : 'series';
    const title = isMovie ? item.title : item.name;
    const date = isMovie ? item.release_date : item.first_air_date;

    return (
        <article
            onClick={() => navigate(`/${type}/${item.id}`)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
        >
            <div className="relative aspect-2/3 overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-black/70 px-2 py-1 backdrop-blur-sm">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-xs font-semibold">{item.vote_average.toFixed(1)}</span>
                </div>
            </div>

            <div className="p-3">
                <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="truncate text-sm font-semibold text-white">{title}</h3>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(item.id, type);
                        }}
                        className="shrink-0 rounded-full p-1 transition-colors hover:bg-white/10"
                    >
                        <Heart size={18} className="fill-red-500 text-red-500" />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={10} className="text-gray-500" />
                    <span className="text-gray-400 text-xs">{String(date).slice(0, 4)}</span>
                    <span className="text-gray-600 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{item.genres[0]?.name}</span>
                </div>
            </div>
        </article>
    );
};

export default FavoriteCard;