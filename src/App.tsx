import { Search, Bell, Play, Info, Star, Film } from 'lucide-react';

export default function App() {

  return (
    <>
      <div className="relative w-full h-130 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Featured"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d] via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 pb-16">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
              <span className="text-gray-400 text-sm">featured.year</span>
              <span className="text-gray-600">•</span>
              <div className="flex items-center gap-1">
                <Star size={12} className="text-amber-400 fill-amber-400" />
                <span className="text-amber-400 text-sm font-semibold">featured.rating</span>
              </div>
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-3">featured.title</h1>
            {/* <div className="flex flex-wrap gap-2 mb-4">
              {featured.genre?.map((g) => (
                <span key={g} className="text-xs text-gray-300 border border-gray-600 rounded-full px-3 py-1">
                  {g}
                </span>
              ))}
            </div> */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">featured.description</p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                <Play size={16} fill="white" /> Watch Now
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm backdrop-blur-sm">
                <Info size={16} /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#0d0d0d] text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-linear-to-b from-black/80 to-transparent backdrop-blur-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Film size={18} className="text-white" fill="white" />
              </div>
              <span className="text-white font-black text-xl tracking-tight">CINEWAVE</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Home', 'Movies', 'Series', 'My List'].map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-colors ${i === 0 ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 bg-white/10 border rounded-xl px-3 py-2 transition-all duration-300`}
            >
              <Search size={15} className="text-gray-400 shrink-0" />
              {/* <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="bg-transparent text-white text-sm placeholder-gray-500 outline-none w-full"
              /> */}
            </div>
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-red-500 to-red-700 flex items-center justify-center text-xs font-bold">
              JD
            </div>
          </div>
        </nav>

        <div className={`px-6 md:px-12`}>
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
            {/* {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold shrink-0 transition-all duration-200 ${activeCategory === id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white/8 text-gray-400 hover:bg-white/12 hover:text-white border border-white/10'
                  }`}
              >
                <Icon size={14} />
                {label}
              </button>
            ))} */}
            <div className="h-6 w-px bg-white/10 mx-1" />
            <span className="text-gray-500 text-xs shrink-0">filtered.length titles</span>
          </div>

          <>
          </>
        </div>
      </div>
    </>
  );
}
