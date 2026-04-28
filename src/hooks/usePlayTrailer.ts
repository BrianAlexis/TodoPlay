import { useState } from "react";
import { getMovieVideos, getSeriesVideos } from '../api/moviesAndSeries';

interface Params {
    id: number;
    isMovie: boolean;
    setTrailerKey: (key: string) => void;
}

const usePlayTrailer = ({ id, isMovie, setTrailerKey }: Params) => {

    const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);
    const [trailerError, setTrailerError] = useState<string | null>(null);

    const handlePlayTrailer = async () => {
        try {
            setIsLoadingTrailer(true);
            setTrailerError(null);

            const res = isMovie ? await getMovieVideos(id) : await getSeriesVideos(id);
            const videos = (res.data?.results ?? []) as Array<{
                key?: string;
                site?: string;
                type?: string;
            }>;

            const selectedVideo =
                videos.find((v) => v.site === 'YouTube' && v.type === 'Trailer') ??
                videos.find((v) => v.site === 'YouTube');

            if (!selectedVideo?.key) {
                setTrailerError('No se encontró trailer para este título.');
                return;
            }

            setTrailerKey(selectedVideo.key);
        } catch {
            setTrailerError('No se pudo cargar el trailer. Intentá de nuevo.');
        } finally {
            setIsLoadingTrailer(false);
        }
    };

    return { handlePlayTrailer, isLoadingTrailer, trailerError };
}

export default usePlayTrailer;