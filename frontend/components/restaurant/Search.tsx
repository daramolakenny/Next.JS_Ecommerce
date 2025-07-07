import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchIconProps {
    size? : number,
    color? : string
}
interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchIcon = ({ size = 16, color = 'gray' }: SearchIconProps) => (
  <FaSearch size={size} color={color} />
);

export default function Search({ onSearch }: SearchProps) {
    const [query, setQuery] = useState("");

    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     onSearch(query);
    // }


    return (
        <div className="w-full bg-white  py-10">
            {/* bg-gradient-to-r from-[#eeEED8] to-[#d0000cd] */}
            <div className="flex items-center justify-around ">
                <h1 className="font-extrabold">All Offers from Cambridge Lagos Nigeria</h1>
                <form action="">
                {/* <form action="" onSubmit={handleSearch}> */}
                {/* flex pl-2 w-full bg-gray-500 shadow-2xl rounded-2xl */}
                    <div className="md:w-[350px] sm:w-[250px] border border-gray-100 shadow-2xl rounded-full">
                        <button 
                            type="submit"
                            className="absolute pl-4 pt-4 text-white shadow-2xl"
                            aria-label="Search"   
                        >
                            <SearchIcon />
                        </button>

                        <input
                            type="text"
                            // value={query}
                            className="w-full setup-form-input px-2 pl-10 py-3 font-bold text-grey-100 focus:outline-none"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="search from menu"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}