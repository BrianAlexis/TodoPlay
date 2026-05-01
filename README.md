# 🎬 TodoPlay

A modern movie and series discovery app built with React, powered by the TMDB API. Browse trending content, explore movies and series, watch trailers, and save your favorites.

**Live demo:** [todo-play-liart.vercel.app](https://todo-play-liart.vercel.app)

---

## Features

- Browse popular, trending, and discover movies and series
- Watch trailers directly in the app via YouTube embed
- Save movies and series to your favorites list (persisted in localStorage)
- Dynamic detail pages for each movie and series
- Infinite scroll with "Load more" pagination on discover pages
- Prefetching on hover for instant page transitions
- Full routing with 404 handling

---

## Tech Stack

- **React 19** with TypeScript
- **Vite** as build tool
- **React Router v7** for client-side routing
- **TanStack Query v5** for data fetching, caching and prefetching
- **Axios** for HTTP requests
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **TMDB API** as the data source

---

## Getting Started

### Prerequisites

- Node.js 18+
- A TMDB account and API token ([get one here](https://www.themoviedb.org/settings/api))

### Installation

```bash
git clone https://github.com/your-username/todoplay.git
cd todoplay
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```
VITE_TMDB_TOKEN=your_tmdb_read_access_token
```

> Use the **Read Access Token** (the long JWT), not the API Key.

### Running locally

```bash
npm run dev
```

---

## Project Structure

```
src/
├── api/            # Axios instance and API endpoint functions
├── components/     # Reusable UI components (MovieCard, Navbar, TrailerModal, etc.)
├── hooks/          # Custom hooks (useFavorites, usePlayTrailer)
├── pages/          # Page components (Home, MovieDetail, SeriesDetail, Favorites, etc.)
│   └── discover/   # Discover movies and series pages
├── types/          # TypeScript interfaces for TMDB data
└── main.tsx        # App entry point
```

---

## API

This project uses the [TMDB API](https://www.themoviedb.org/documentation/api). The following endpoints are consumed:

- `/movie/popular` — Popular movies
- `/trending/movie/week` — Trending movies
- `/trending/tv/week` — Trending series
- `/discover/movie` — Discover movies with pagination
- `/discover/tv` — Discover series with pagination
- `/genre/movie/list` — Movie genres
- `/movie/{id}` — Movie detail with videos and credits
- `/tv/{id}` — Series detail with videos and credits

---

## License

This project was built for learning purposes. All movie and series data is provided by [TMDB](https://www.themoviedb.org).

> This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

**Brian** — [LinkedIn](https://www.linkedin.com/in/brian-alexis-acu%C3%B1a/).
