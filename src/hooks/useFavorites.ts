import { useState } from "react"

interface Favorite {
    id: number;
    type: 'movie' | 'tv';
}

const useFavorites = () => {

    const [favorites, setFavorites] = useState<Favorite[]>(() => {
        const stored = localStorage.getItem('favoriteShow');
        return stored ? JSON.parse(stored) : [];
    });

    const toggleFavorite = (id: number, type: 'movie' | 'tv') => {
        const alreadyFavorite = favorites.find(f => f.id === id && f.type === type);

        const newFavorites = alreadyFavorite
            ? favorites.filter(f => !(f.id === id && f.type === type))
            : [...favorites, { id, type }];

        setFavorites(newFavorites);
        localStorage.setItem('favoriteShow', JSON.stringify(newFavorites));
    };

    const isFavorite = (id: number, type: 'movie' | 'tv') => {
        return !!favorites.find(f => f.id === id && f.type === type);
    }

    return {
        favorites,
        toggleFavorite,
        isFavorite
    }
}
export default useFavorites