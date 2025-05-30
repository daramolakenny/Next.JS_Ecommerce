import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchIconProps {
    size? : number,
    color? : string
}

const SearchIcon = ({ size = 24, color = 'black' }: SearchIconProps) => (
  <FaSearch size={size} color={color} />
);

export default function Search({}) {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        let content = handleChange
        console.log("Seaching");
    }

    return (
        <div className="w-full flex items-center justify-center ">
            <form action="" onSubmit={handleSearch} className="md:w-[350px] sm:w-[250px]">
                <input 
                    type="text"
                    value={query}
                    className="relative w-full bg-green-700 highlight-none setup-form-input px-2 py-3 font-bold text-white rounded-l-4xl focus:outline-none"
                    placeholder="Search..."
                    onChange={handleChange}
                />

                <button 
                    type="button"
                    className="absolute px-2 py-3 rounded-r-4xl shadow-2xl bg-yellow-100"
                    onClick={handleSearch}    
                >
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}