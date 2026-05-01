import { Link } from 'react-router';
import { Home, Film } from 'lucide-react';
import BackButton from '../components/ui/BackButton';

const NotFound = () => {

    return (
        <div className="min-h-screen bg-[#090b14] flex flex-col items-center justify-center text-white px-6">

            <div className="relative mb-8">
                <div className="animate-bounce">
                    <Film size={80} className="text-red-600 opacity-90" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full animate-ping" />
            </div>

            <h1 className="text-[120px] md:text-[180px] font-black leading-none text-white/5 select-none absolute">
                404
            </h1>

            <div className="relative text-center z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Page not found</h2>
                <p className="text-gray-400 text-sm md:text-base max-w-sm mx-auto mb-8">
                    It appears this film is not in our catalog. <br />The scene you're looking for does not exist.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to={'/'}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors w-full sm:w-auto justify-center"
                    >
                        <Home size={16} /> Back to TodoPlay
                    </Link>

                    <BackButton />
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-2 bg-repeat-x opacity-20"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #fff 0px, #fff 20px, transparent 20px, transparent 40px)',
                }}
            />
        </div>
    );
};

export default NotFound;