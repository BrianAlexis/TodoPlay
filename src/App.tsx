import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import SerieDetail from './pages/SerieDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/series/:id" element={<SerieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}