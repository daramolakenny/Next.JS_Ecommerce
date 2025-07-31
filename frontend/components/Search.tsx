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
                <form action="" onSubmit={handleSearch}>
                {/* flex pl-2 w-full bg-gray-500 shadow-2xl rounded-2xl */}
                    <div className="md:w-[350px] sm:w-[250px] border-gray-400 relative rounded-2xl">
                        <input 
                            type="text"
                            value={query}
                            className="relative w-full highlight-none setup-form-input bg-gray-100 px-2 py-3 font-bold text-grey-100 rounded-l-4xl focus:outline-none"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                        />

                        <button 
                            type="submit"
                            className="absolute px-2 py-3 rounded-r-4xl text-white shadow-2xl bg-gray-100"
                            aria-label="Search"   
                        >
                            <SearchIcon />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}