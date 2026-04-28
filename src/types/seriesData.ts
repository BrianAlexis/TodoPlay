export interface SeriesData {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
}

export interface Result {
    adult: boolean
    backdrop_path: string
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    first_air_date: string
    vote_average: number
    vote_count: number
    origin_country: string[]
}

export interface PopularSeriesData {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface GenreSeriesData {
    genres: Genre[];
}

export interface SeriesDetailData {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    first_air_date: string;
    last_air_date: string;
    status: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    number_of_episodes: number;
    number_of_seasons: number;
    in_production: boolean;
    episode_run_time: number[];
    genres: Genre[];
    created_by: CreatedBy[];
    credits: {
        cast: CastMember[];
        crew: CrewMember[];
    };
    videos: {
        results: Video[];
    };
}

export interface CreatedBy {
    id: number;
    name: string;
    profile_path: string | null;
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