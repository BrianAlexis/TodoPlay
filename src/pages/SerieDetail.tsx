import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getSerieDetail } from '../api/moviesAndSeries';
import type { SeriesDetailData } from '../types/seriesData';
import { ArrowLeft, Star, Play, Calendar } from 'lucide-react';

const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [serie, setSerie] = useState<SeriesDetailData | null>(null);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        getSerieDetail(Number(id)).then(({ data }) => {
            setSerie(data);
            const trailer = data.videos.results.find(
                (v: any) => v.type === 'Trailer' && v.site === 'YouTube' && v.official
            );
            setTrailerKey(trailer?.key ?? null);
        });
    }, [id]);

    if (!serie) return (
        <div className="min-h-screen bg-[#090b14] flex items-center justify-center">
            <span className="text-white text-lg">Loading...</span>
        </div>
    );

    const director = serie.credits.crew.find(c => c.job === 'Director');
    const topCast = serie.credits.cast.slice(0, 6);

    return (
        <div className="min-h-screen bg-[#090b14] text-white">

            <div className="relative w-full h-[80vh] overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
                    alt={serie.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#090b14] via-[#090b14]/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-[#090b14] via-transparent to-transparent" />

                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                    <ArrowLeft size={18} /> Back
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 -mt-150 relative z-10">
                <div className="flex gap-8">

                    <div className="hidden md:block shrink-0">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                            alt={serie.name}
                            className="w-56 rounded-xl border border-white/10"
                        />
                    </div>

                    <div className="flex-1">
                        <p className="text-red-500 text-sm font-semibold uppercase tracking-wider mb-2">{serie.status}</p>
                        <h1 className="text-4xl md:text-5xl font-black mb-2">{serie.name}</h1>
                        {serie.tagline && (
                            <p className="text-gray-400 italic mb-4">"{serie.tagline}"</p>
                        )}

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="flex items-center gap-1 bg-amber-500/20 px-3 py-1 rounded-full">
                                <Star size={14} className="text-amber-400 fill-amber-400" />
                                <span className="text-amber-400 font-semibold text-sm">{serie.vote_average.toFixed(1)}</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-gray-400 text-sm">
                                <Calendar size={14} className='text-white' />
                                First Episode
                                <span>{serie.first_air_date}</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 text-gray-400 text-sm">
                                <Calendar size={14} className='text-white' />
                                Last Episode
                                <span>{serie.last_air_date}</span>
                            </div>

                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {serie.genres.map(g => (
                                <span key={g.id} className="text-xs border border-white/20 text-gray-300 rounded-full px-3 py-1">
                                    {g.name}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">{serie.overview}</p>

                        {director && (
                            <p className="text-gray-400 text-sm mb-6">
                                <span className="text-white font-semibold">Director: </span>{director.name}
                            </p>
                        )}

                        {trailerKey && (
                            <button
                                onClick={() => setShowTrailer(true)}
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer"
                            >
                                <Play size={16} fill="white" /> Watch trailer
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-4">Principal cast</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        {topCast.map(actor => (
                            <div key={actor.id} className="text-center">
                                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-800 mb-2">
                                    {actor.profile_path
                                        ? <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} className="w-full h-full object-cover" />
                                        : <div className="w-full h-full flex items-center justify-center text-gray-600 text-2xl">?</div>
                                    }
                                </div>
                                <p className="text-white text-xs font-semibold truncate">{actor.name}</p>
                                <p className="text-gray-500 text-xs truncate">{actor.character}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showTrailer && trailerKey && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowTrailer(false)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowTrailer(false)}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300"
                        >
                            ✕
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                            className="w-full h-full rounded-xl"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;