import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import dataMap from "@/data";

interface SearchIconProps {
    size? : number,
    color? : string
}

const SearchIcon = ({ size = 24, color = 'black' }: SearchIconProps) => (
  <FaSearch size={size} color={color} />
);

type ItemType = {
    id: number;
    name: string;
}


export default function Search({}) {
    const [query, setQuery] = useState<string>("");
    const [result, setResult] = useState<ItemType[]>([]);
    const [notFound, setNotFound] = useState<boolean>(false);
    
    // const queryLower = query.toLowerCase();
    // const matchSearch: ItemType[] = [];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setNotFound(false);
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if(!query.trim()){
            setResult([]);
            setNotFound(false);
            return;
        }

        // search by name or categories
        const queryLower = query.toLowerCase();
        const matchSearch: ItemType[] = [];

        Object.entries(dataMap).forEach(([category, items]) => {
            // match category
            if(category.includes(queryLower)) {
                matchSearch.push(...items);
            }
            // match Items
            const matchedItems = items.filter((item) => 
                item.name.toLocaleLowerCase().includes(queryLower)
            );
            matchedItems.push(...matchedItems);
        });

        // Remove duplicates (in case an item matches both category and name)
        // const uniqueItems = Array.from(
            //     new Map(matchedItems.map((item) => [item.id, item])).values()
            //   );

        console.log("Search Query:", query);
        // setResults(uniqueItems);
        // setNotFound(uniqueItems.length === 0);
        // console.log("Search query:", query, "Results:", uniqueItems);
    }

  

    return (
        <div className="w-full flex items-center justify-center ">
            <form action="" onSubmit={handleSearch} className="md:w-[350px] sm:w-[250px]">
                <input 
                    type="text"
                    // value={query}
                    className="relative w-full bg-green-700 highlight-none setup-form-input px-2 py-3 font-bold text-white rounded-l-4xl focus:outline-none"
                    onChange={handleChange}
                    placeholder="Search..."
                />

                <button 
                    type="submit"
                    className="absolute px-2 py-3 rounded-r-4xl shadow-2xl bg-yellow-100"
                    aria-label="Search"   
                >
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}


// components/Search.tsx
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import dataMap from "@/data";
// import Link from "next/link";

// interface SearchIconProps {
//   size?: number;
//   color?: string;
// }

// type ItemType = {
//   id: number;
//   name: string;
//   icon: string;
//   price: string;
//   cart: string;
//   Order: string;
//   remove_order: string;
//   url: string;
// };

// const SearchIcon = ({ size = 24, color = "black" }: SearchIconProps) => (
//   <FaSearch size={size} color={color} />
// );

// export default function Search() {
//   const [query, setQuery] = useState<string>(""); // Changed to string for flexible search
//   const [results, setResults] = useState<ItemType[]>([]); // Store search results
//   const [notFound, setNotFound] = useState<boolean>(false); // Track "not exist" state

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//     setNotFound(false); // Reset not found on input change
//   };

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent form submission page reload
//     if (!query.trim()) {
//       setResults([]);
//       setNotFound(false);
//       return;
//     }

//     // Search dataMap for matches in category names or item names
//     const queryLower = query.toLowerCase();
//     const matchedItems: ItemType[] = [];

//     // Check categories and items
//     Object.entries(dataMap).forEach(([category, items]) => {
//       // Match category name
//       if (category.toLowerCase().includes(queryLower)) {
//         matchedItems.push(...items);
//       }
//       // Match item names
//       const matchingItems = items.filter((item) =>
//         item.name.toLowerCase().includes(queryLower)
//       );
//       matchedItems.push(...matchingItems);
//     });

//     // Remove duplicates (in case an item matches both category and name)
//     const uniqueItems = Array.from(
//       new Map(matchedItems.map((item) => [item.id, item])).values()
//     );

//     setResults(uniqueItems);
//     setNotFound(uniqueItems.length === 0);
//     console.log("Search query:", query, "Results:", uniqueItems);
//   };

//   return (
//     <div className="w-full flex flex-col items-center justify-center">
//       <form onSubmit={handleSearch} className="md:w-[350px] sm:w-[250px] w-[200px] relative flex">
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange}
//           className="w-full bg-green-700 text-white font-bold px-3 py-3 rounded-l-3xl focus:outline-none placeholder:text-white/70"
//           placeholder="Search food or category..."
//         />
//         <button
//           type="submit"
//           className="px-3 py-3 rounded-r-3xl bg-yellow-100 shadow-2xl"
//           aria-label="Search"
//         >
//           <SearchIcon color="black" />
//         </button>
//       </form>

//       {/* Display search results */}
//       <div className="w-full max-w-[350px] mt-4">
//         {notFound && (
//           <p className="text-red-500 text-center font-medium">Not exist</p>
//         )}
//         {results.length > 0 && (
//           <div className="flex flex-col gap-4">
//             {results.map(({ id, name, icon, price, url }) => (
//               <Link key={id} href={url} className="block">
//                 <div className="bg-orange-100 text-green-900 shadow flex items-center gap-4 p-4 rounded-lg hover:bg-orange-200 transition">
//                   <img
//                     src={icon}
//                     alt={name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold">{name}</h3>
//                     <p className="text-sm">{price}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }