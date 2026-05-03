import { useState } from 'react';
import { Link } from "react-router";
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Movies', href: '/discover/movies' },
    { label: 'Series', href: '/discover/series' },
    { label: 'My favorites', href: '/favorites' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-5 z-30 mx-auto w-full max-w-400">
            <header className="mb-6 rounded-2xl border border-white/10 bg-[#0f1322]/85 px-4 py-3 backdrop-blur-md sm:px-5">
                <div className="flex items-center justify-between">

                    <div
                        className="flex-1"
                        style={{ display: 'inherit' }}>
                        <Link to="/">
                            <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
                        </Link>
                    </div>

                    <nav className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-1 justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <nav className="mt-3 flex flex-col gap-1 md:hidden">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbar;