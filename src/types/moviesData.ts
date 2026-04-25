export interface Result {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    genres?: Genre[];
    id: number;
    title: string;
    media_type?: string,
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    softcore: boolean;
    video: boolean;
    vote_average: number;
    vote_count: number;

}

export interface PopularMoviesData {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface GenreMovieData {
    genres: Genre[];
}