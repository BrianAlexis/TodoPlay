import { useEffect, useState } from 'react';
import { getMovieDetail, getSerieDetail } from '../api/moviesAndSeries';

import useFavorites from '../hooks/useFavorites';
import { ArrowLeft, Heart } from 'lucide-react';

import type { MovieDetailData } from '../types/moviesData';
import type { SeriesDetailData } from '../types/seriesData';
import FavoriteCard from '../components/FavoriteCard';
import { useNavigate } from 'react-router';

const FavoritesPage = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const [favoriteDetails, setFavoriteDetails] = useState<(MovieDetailData | SeriesDetailData)[]>([]);
    const navigate = useNavigate();

    const favoriteMovies = favoriteDetails.filter(item => 'title' in item) as MovieDetailData[];
    const favoriteSeries = favoriteDetails.filter(item => 'name' in item) as SeriesDetailData[];

    useEffect(() => {
        if (favorites.length === 0) return;

        Promise.all(
            favorites.map(fav =>
                fav.type === 'movie'
                    ? getMovieDetail(fav.id)
                    : getSerieDetail(fav.id)
            )
        ).then(responses => {
            const data = responses.map(res => res.data);
            setFavoriteDetails(data);
        });
    }, [favorites]);

    return (
        <main className="min-h-screen bg-[#090b14] text-white">
            <div className="mx-auto w-full max-w-400 px-4 pb-12 pt-6 sm:px-6 lg:px-8">

                <div className="mb-32 flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600/20">
                        <Heart size={20} className="fill-red-500 text-red-500" />
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                        <ArrowLeft size={18} /> Back
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-white">My Favorites</h1>
                    </div>
                </div>

                {favoriteMovies.length === 0 && favoriteSeries.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10">
                            <Heart size={36} className="text-gray-600" />
                        </div>
                        <h2 className="text-lg font-semibold text-white mb-2">No favorites yet</h2>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Start adding movies and series to your favorites by clicking the heart icon on any card.
                        </p>
                    </div>
                )}

                {favoriteMovies.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-white text-4xl font-bold mb-4">Movies</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {favoriteMovies.map(item => (
                                <FavoriteCard key={item.id} item={item} toggleFavorite={toggleFavorite} />
                            ))}
                        </div>
                    </section>
                )}

                {favoriteSeries.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-white text-4xl font-bold mb-4">Series</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {favoriteSeries.map(item => (
                                <FavoriteCard key={item.id} item={item} toggleFavorite={toggleFavorite} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main >
    );
};

export default FavoritesPage;