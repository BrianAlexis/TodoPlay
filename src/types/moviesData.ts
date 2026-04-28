export interface MoviesData {
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
    results: MoviesData[];
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

export interface MovieDetailData {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
    budget: number;
    revenue: number;
    status: string;
    tagline: string;
    genres: Genre[];
    credits: {
        cast: CastMember[];
        crew: CrewMember[];
    };
    videos: {
        results: Video[];
    };
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
}

export interface CrewMember {
    id: number;
    name: string;
    job: string;
    profile_path: string | null;
}

export interface Video {
    key: string;
    site: string;
    type: string;
    official: boolean;
}