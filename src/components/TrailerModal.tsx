import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface Props {
    trailerKey: string | null;
    onClose: () => void;
}

const TrailerModal = ({ trailerKey, onClose }: Props) => {
    if (!trailerKey) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 md:p-8"
            onClick={onClose}
        >
            <div
                className="relative h-[80vh] w-full max-w-6xl"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                    <X size={28} />
                </button>
                <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                    className="h-full w-full rounded-xl"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        </div>
        ,
        document.body
    );
};

export default TrailerModal;