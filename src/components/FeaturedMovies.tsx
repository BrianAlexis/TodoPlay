import { Play, Info, Star } from 'lucide-react';
import type { Genre, Result } from '../types/moviesData';

interface Props {
    popularMovies: Result[],
    genres: Genre[]
}

const FeaturedMovies = ({ popularMovies, genres }: Props) => {
    return (
        <div className="relative w-full h-130 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d] via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pb-16">
                <div className="max-w-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                        <span className="text-gray-400 text-sm">{popularMovies[0]?.release_date}</span>
                        <span className="text-gray-600">•</span>
                        <div className="flex items-center gap-1">
                            <Star size={12} className="text-amber-400 fill-amber-400" />
                            <span className="text-amber-400 text-sm font-semibold">{popularMovies[0]?.vote_average}</span>
                        </div>
                    </div>
                    <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-3">{popularMovies[0]?.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {popularMovies[0]?.genre_ids.map(id => {
                            const genre = genres.find(g => g.id === id);
                            return <span key={id} className="text-xs text-gray-300 bg-white/10 rounded-2xl p-1.5">{genre?.name}</span>;
                        })}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">{popularMovies[0]?.overview}</p>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                            <Play size={16} fill="white" /> Watch Now
                        </button>
                        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm backdrop-blur-sm">
                            <Info size={16} /> More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturedMovies