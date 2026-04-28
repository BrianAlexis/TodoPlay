// import { Search } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '#featured-movies' },
    { label: 'Movies', href: '#discover-movies' },
    { label: 'Series', href: '#discover-series' },
    { label: 'My favorites', href: '/favorites' },
];

const Navbar = () => {
    return (
        <header className="sticky top-5 z-30 mb-6 rounded-2xl border border-white/10 bg-[#0f1322]/85 px-4 py-3 backdrop-blur-md sm:px-5">
            <div className="flex items-center justify-between">

                <div className="flex-1">
                    <a href="#" className="text-xl font-black tracking-tight text-red-500 sm:text-2xl">
                        CineVerse
                    </a>
                </div>

                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex flex-1 justify-end">
                    {/* <div className="relative w-full sm:max-w-xs md:w-72">
                    <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search new movies or TV shows..."
                        className="h-10 w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-3 text-sm text-white outline-none transition-all placeholder:text-slate-400 focus:border-blue-400/70 focus:bg-white/10"
                    />
                </div> */}
                </div>
            </div>

            {/* Nav móvil (opcional: centrado también) */}
            <nav className="mt-3 flex items-center justify-center gap-1 overflow-x-auto md:hidden">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
