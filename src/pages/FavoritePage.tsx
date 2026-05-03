import { useEffect, useState } from 'react';
import { getMovieDetail, getSerieDetail } from '../api/moviesAndSeries';

import useFavorites from '../hooks/useFavorites';
import { Heart } from 'lucide-react';

import type { MovieDetailData } from '../types/moviesData';
import type { SeriesDetailData } from '../types/seriesData';
import FavoriteCard from '../components/FavoriteCard';
import BackButton from '../components/ui/BackButton';
import Navbar from '../components/Navbar';

const FavoritesPage = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const [favoriteDetails, setFavoriteDetails] = useState<(MovieDetailData | SeriesDetailData)[]>([]);

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
        <main className="min-h-screen text-white">
            <div className="mx-auto w-full max-w-400 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
                <Navbar />

                <div className="mb-5 flex justify-center gap-3">
                    <h2 className='my-10 md:mt-15 md:mb-10 text-3xl font-black leading-tight text-white md:text-5xl text-center'>All your <span className='text-red-500'>favorites</span> shows</h2>
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

                <div>
                    <BackButton />
                    <div className='mt-5'>
                        {favoriteMovies.length > 0 && (
                            <section className="mb-10">
                                <h2 className="text-white text-4xl font-bold mb-4">Your favorite <span className='text-red-500'>movies</span></h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {favoriteMovies.map(item => (
                                        <FavoriteCard key={item.id} item={item} toggleFavorite={toggleFavorite} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>


                    {favoriteSeries.length > 0 && (
                        <section className="mb-10">
                            <h2 className="text-white text-4xl font-bold mb-4">Your favorite <span className='text-red-500'>series</span></h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {favoriteSeries.map(item => (
                                    <FavoriteCard key={item.id} item={item} toggleFavorite={toggleFavorite} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </main >
    );
};

export default FavoritesPage;