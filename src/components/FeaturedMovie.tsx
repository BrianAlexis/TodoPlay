import { useState } from 'react';

import usePlayTrailer from '../hooks/usePlayTrailer';

import { Play, Info, Star } from 'lucide-react';

import type { Genre } from '../types/moviesData';
import type { MoviesData } from '../types/moviesData';

import TrailerModal from './TrailerModal';

interface Props {
    popularMovies: MoviesData[],
    genres: Genre[]
}

const FeaturedMovie = ({ popularMovies, genres }: Props) => {
    const featuredMovie = popularMovies[0];

    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    const { handlePlayTrailer, isLoadingTrailer, trailerError } = usePlayTrailer({
        id: featuredMovie?.id,
        isMovie: true,
        setTrailerKey,
    });

    if (!featuredMovie) {
        return (
            <section className="mb-8 h-104 w-full animate-pulse rounded-3xl border border-white/10 bg-white/5" />
        );
    }

    const imageBaseUrl = 'https://image.tmdb.org/t/p';

    return (
        <section id='featured-movies' className="relative mb-8 h-124 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30">
            <img
                src={`${imageBaseUrl}/w1280${featuredMovie.backdrop_path || featuredMovie.poster_path}`}
                alt={featuredMovie.title}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#080a13] via-[#080a13]/80 to-[#080a13]/25" />
            <div className="absolute inset-0 bg-linear-to-t from-[#090b14] via-[#090b14]/40 to-transparent" />

            <div className="absolute inset-0 flex items-end p-5 sm:p-8 lg:p-10">
                <div className="grid items-center w-full max-w-5xl gap-6 lg:grid-cols-[180px_1fr]">
                    <img
                        src={`${imageBaseUrl}/w342${featuredMovie.poster_path}`}
                        alt={`${featuredMovie.title} poster`}
                        className="hidden h-64 w-44 rounded-2xl border border-white/15 object-cover shadow-xl shadow-black/40 lg:block"
                    />

                    <div className="max-w-2xl">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">MOST POPULAR</span>
                            <span className="text-gray-300/90 text-sm">
                                {String(featuredMovie.release_date).slice(0, 4)}
                            </span>
                            <span className="text-gray-600">•</span>
                            <div className="flex items-center gap-1">
                                <Star size={12} className="text-amber-400 fill-amber-400" />
                                <span className="text-amber-400 text-sm font-semibold">{featuredMovie.vote_average.toFixed(1)}</span>
                            </div>
                        </div>

                        <h1 className="mb-3 text-3xl font-black leading-tight text-white md:text-5xl">
                            {featuredMovie.title}
                        </h1>

                        <div className="mb-4 flex flex-wrap gap-2">
                            {featuredMovie.genre_ids.map(id => {
                                const genre = genres.find(g => g.id === id);
                                return <span key={id} className="text-xs text-gray-300 bg-white/10 rounded-2xl p-1.5">{genre?.name}</span>;
                            })}
                        </div>

                        <p className="mb-6 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base">
                            {featuredMovie.overview}
                        </p>

                        <div className="flex items-center gap-3">
                            <button
                                type='button'
                                onClick={handlePlayTrailer}
                                disabled={isLoadingTrailer}
                                className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-500 cursor-pointer">
                                <Play size={16} fill="white" /> Watch trailer
                            </button>
                            {trailerError && (
                                <p className="mb-2 text-[11px] leading-tight text-red-300">{trailerError}</p>
                            )}
                            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 cursor-pointer">
                                <Info size={16} /> More Info
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <TrailerModal trailerKey={trailerKey} onClose={() => setTrailerKey(null)} />
        </section>
    )
}
export default FeaturedMovie