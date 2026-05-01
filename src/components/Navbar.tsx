import { Link } from "react-router";

const navItems = [
    { label: 'Home', href: '#featured-movies' },
    { label: 'Movies', href: '/discover/movies' },
    { label: 'Series', href: '/discover/series' },
    { label: 'My favorites', href: '/favorites' },
];

const Navbar = () => {

    return (
        <header className="sticky top-5 z-30 mb-6 rounded-2xl border border-white/10 bg-[#0f1322]/85 px-4 py-3 backdrop-blur-md sm:px-5">
            <div className="flex items-center justify-between">

                <div className="flex-1">
                    <Link to="/">
                        <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
                    </Link>
                </div>

                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-white-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex flex-1 justify-end">
                </div>
            </div>

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
