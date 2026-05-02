import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
    id: number | string;
    name: string;
}

interface Props {
    label: string;
    options: Option[];
    selected: number | string | null;
    onSelect: (id: number | string | null) => void;
}

const FilterDropdown = ({ label, options, selected, onSelect }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedName = options.find(o => o.id === selected)?.name;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
                <span>{selectedName ?? label}</span>
                <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full z-20 mt-2 max-h-72 w-48 overflow-y-auto rounded-xl border border-white/10 bg-[#0f1322] shadow-xl shadow-black/40">
                    <button
                        onClick={() => { onSelect(null); setIsOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${!selected ? 'text-red-500 font-semibold' : 'text-gray-300'}`}
                    >
                        All
                    </button>
                    {options.map(option => (
                        <button
                            key={option.id}
                            onClick={() => { onSelect(option.id); setIsOpen(false); }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/10 ${selected === option.id ? 'text-red-500 font-semibold' : 'text-gray-300'}`}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;