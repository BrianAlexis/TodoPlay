import { Play, Info, Star, Clock, TrendingUp } from 'lucide-react';

const MovieCard = () => {

    return (
        <div
            className={`relative shrink-0 rounded-xl overflow-hidden cursor-pointer group`}
        >
            <div className={`relative ${large ? 'h-80' : 'h-64'} bg-gray-800`}>
                <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-md px-2 py-0.5 flex items-center gap-1">
                    <Star size={10} className="text-amber-400 fill-amber-400" />
                    <span className="text-white text-xs font-semibold">{movie.rating}</span>
                </div>
                {movie.trending && (
                    <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm rounded-md px-2 py-0.5 flex items-center gap-1">
                        <TrendingUp size={10} className="text-white" />
                        <span className="text-white text-xs font-bold">HOT</span>
                    </div>
                )}
                <div
                    className={`absolute inset-0 bg-black/70 flex flex-col justify-end p-3 transition-all duration-300`}
                >
                    <div className="flex gap-2 mb-2">
                        <button className="flex-1 bg-white text-black text-xs font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors">
                            <Play size={12} fill="black" /> Play
                        </button>
                        <button className="w-8 h-7 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Info size={12} className="text-white" />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {movie.genre.slice(0, 2).map((g) => (
                            <span key={g} className="text-xs text-gray-300 bg-white/10 rounded px-1.5 py-0.5">
                                {g}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-1">
                <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-gray-400 text-xs">{movie.year}</span>
                    <span className="text-gray-600 text-xs">•</span>
                    <Clock size={10} className="text-gray-500" />
                    <span className="text-gray-400 text-xs">{movie.duration}</span>
                </div>
            </div>
        </div>
    )
}
export default MovieCard