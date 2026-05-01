import { Film } from 'lucide-react';

const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-[#090b14] flex flex-col items-center justify-center text-white px-6">

            <div className="relative mb-8">
                <div className="animate-pulse">
                    <Film size={80} className="text-red-600 opacity-90" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full animate-ping" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">Loading your Todo<span className='text-red-500'>Play</span> experience</h2>
            <p className="text-gray-400 text-sm mb-10">Fetching the latest movies and series for you...</p>

            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-8">
                <div className="h-full bg-red-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
            </div>

            <div className="absolute bottom-0 w-full h-2 bg-repeat-x opacity-20"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #fff 0px, #fff 20px, transparent 20px, transparent 40px)',
                }}
            />
        </div>
    );
};

export default LoadingScreen;