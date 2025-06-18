import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchIconProps {
    size? : number,
    color? : string
}
interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchIcon = ({ size = 24, color = 'black' }: SearchIconProps) => (
  <FaSearch size={size} color={color} />
);

export default function Search({ onSearch }: SearchProps) {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    }


    return (
        <div className="w-full bg-white  py-10">
            {/* bg-gradient-to-r from-[#eeEED8] to-[#d0000cd] */}
            <div className="flex items-center justify-around ">
                <h1 className="font-extrabold">All Offers from Cambridge Lagos Nigeria</h1>
                <form action="" onSubmit={handleSearch} className="md:w-[350px] sm:w-[250px] ">
                    <input 
                        type="text"
                        // value={query}
                        className="relative w-full bg-green-700 highlight-none setup-form-input px-2 py-3 font-bold text-white rounded-l-4xl focus:outline-none"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                    />

                    <button 
                        type="submit"
                        className="absolute px-2 py-3 rounded-r-4xl shadow-2xl bg-yellow-400"
                        aria-label="Search"   
                    >
                        <SearchIcon />
                    </button>
                </form>
            </div>
        </div>
    )
}