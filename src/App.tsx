import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import SerieDetail from './pages/SerieDetail';
import FavoritesPage from './pages/FavoritePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/series/:id" element={<SerieDetail />} />
      <Route path="/favorites/" element={<FavoritesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}