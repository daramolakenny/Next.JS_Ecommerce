// components/ItemCategory.tsx
import { useState, useEffect } from "react";
import dataMap from "@/data";
import Link from "next/link";
import Image from "next/image";

// Define the type for items in dataMap
interface Item {
  id: number;
  name: string;
  icon: string;
  price: string;
  Order: string;
  url: string;
}

// Define a type for the keys of dataMap
type DataMapKeys = keyof typeof dataMap;

interface ItemCategoryProps {
  searchQuery: string;
}

const ItemCategory = ({ searchQuery }: ItemCategoryProps) => {
  const [active, setActive] = useState<DataMapKeys>("Dishes");

  useEffect(() => {
    console.log("dataMap:", dataMap);
    console.log("active category:", active);
    console.log("dataMap[active]:", dataMap[active]);
    console.log("searchQuery:", searchQuery);
  }, [active, searchQuery]);

  const getItemsToDisplay = (): Item[] => {
    if (!searchQuery) {
      return dataMap[active] || [];
    }

    const queryLower = searchQuery.toLowerCase();
    const matchedItems: Item[] = [];

    Object.entries(dataMap).forEach(([category, items]) => {
      if (category.toLowerCase().includes(queryLower)) {
        matchedItems.push(...items);
      }
      const matchingItems = items.filter((item: Item) =>
        item.name.toLowerCase().includes(queryLower)
      );
      matchedItems.push(...matchingItems);
    });

    // Remove duplicates based on item id
    return Array.from(
      new Map(matchedItems.map((item) => [item.id, item])).values()
    ) as Item[];
  };

  const itemsToDisplay: Item[] = getItemsToDisplay();

  return (
    <div className="h-full w-full">
      <div className="flex flex-col bg-gray-100 sm:flex-row justify-center tracking-wide py-4 sm:py-6 text-lg sm:text-2xl border-b-sky-100 gap-2 sm:gap-0">
        {Object.keys(dataMap).map((category) => (
          <button
            key={category}
            onClick={() => setActive(category as DataMapKeys)}
            className={`px-4 ${
              active === category
                ? "border rounded-full bg-black px-2 py-1 border-white font-bold text-white"
                : "text-black font-bold"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="w-full bg-white h-fit flex flex-row items-center justify-center">
        <div className="md:flex flex-wrap gap-10 mb-8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem">
          {itemsToDisplay.length > 0 ? (
            itemsToDisplay.slice(0, 8).map(({ id, icon, name, price, Order }) => (
              <div key={id} className="block relative gap-4 md:max-w-[30rem] p-0.5">
                <Link href={`/items/${id}`}>
                  <div className="relative rounded-br-4xl bg-orange-100 text-green-900 shadow flex flex-col min-h-[16rem] p-[2.4rem] cursor-pointer">
                    <div className="flex items-center transition ease-in-out hover:scale-120">
                      <Image src={icon} width={208} height={48} alt={name} className="" />
                    </div>
                    <h2 className="mt-10 w-full">{name}</h2>
                    <div className="flex justify-between">
                      <div>{price}</div>
                      <button className="bg-green-400 text-white font-bold p-4 rounded-tl-full">
                        {Order}
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-black pt-6 text-center">No items found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCategory;





// import { useState, useEffect } from "react";
// import dataMap from "@/data";
// import Link from "next/link";
// import Image from "next/image";

// // Define a type for the keys of dataMap
// type DataMapKeys = keyof typeof dataMap;

// interface ItemCategoryProps {
//   searchQuery: string;
// }

// const ItemCategory = ({searchQuery} : ItemCategoryProps) => {
//   const [active, setActive] = useState<DataMapKeys>("Dishes");

//   useEffect(() => {
//     console.log("dataMap:", dataMap);
//     console.log("active category:", active);
//     console.log("dataMap[active]:", dataMap[active]);
//   }, [active]);

//   const getItemsToDisplay = () => {
//     if (!searchQuery) {
//       return dataMap[active] || [];
//     }

//     const queryLower = searchQuery.toLowerCase();
//     const matchedItems: any[] = [];

//     Object.entries(dataMap).forEach(([category, items]) => {
//       if (category.toLowerCase().includes(queryLower)) {
//         matchedItems.push(...items);
//       }
//       const matchingItems = items.filter((item) =>
//         item.name.toLowerCase().includes(queryLower)
//       );
//       matchedItems.push(...matchingItems);
//     });

//     // Remove duplicates based on item id
//     return Array.from(
//       new Map(matchedItems.map((item) => [item.id, item])).values()
//     );
//   };

//   const itemsToDisplay = getItemsToDisplay() || [];

//   return (
//     <div className="h-full">
//       <div className="flex flex-col sm:flex-row justify-center shadow-white tracking-wide py-4 sm:py-6 text-lg sm:text-2xl border-b-sky-100 gap-2 sm:gap-0">
//       {/* <div className="flex md:flex-row sm:flex-col justify-center shadow-white tracking-wide py-10 text-2xl border-b-sky-100"> */}
//         {Object.keys(dataMap).map((category) => (
//           <button
//             key={category}
//             onClick={() => setActive(category as DataMapKeys)}
//             className={`px-4 ${
//               active === category
//                 ? "border-b-4 border-white font-bold text-white"
//                 : "text-yellow-100"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="w-full h-fit flex flex-row my-10 items-center justify-center">
//         <div className="md:flex flex-wrap gap-10 mb-8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem">
//           {itemsToDisplay.length > 0 ? (
//             itemsToDisplay.map(({ id, icon, name, price, cart }) => (
//               <div key={id} className="block relative gap-4 md:max-w-[30rem] p-0.5">
//                 <Link href={`/items/${id}`}>
//                   <div className="relative rounded-br-4xl bg-orange-100 text-green-900 shadow flex flex-col min-h-[16rem] p-[2.4rem] cursor-pointer">
//                     <div className="flex items-center transition ease-in-out hover:scale-120">
//                       <Image src={icon} width={208} height={48} alt={name} />
//                     </div>
//                     <h2 className="mt-30 w-full">{name}</h2>
//                     <div className="flex justify-between">
//                       <div>{price}</div>
//                       <button className="bg-green-700 text-white font-bold p-4 rounded-tl-full">
//                         {cart}
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-white text-center">No items found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCategory;



// {dataMap[active]?.length > 0 ? (
//   dataMap[active].map(({ id, icon, name, price, cart}) => (
//     <div key={id} className="block relative gap-4 md:max-w-[30rem] p-0.5">
//       {/* Fix the href to match the dynamic route */}
//       {/* <Link href={url}> */}
//       <Link href={`/items/${id}`}>
//         <div className="relative rounded-br-4xl bg-orange-100 text-green-900 shadow flex flex-col min-h-[16rem] p-[2.4rem] cursor-pointer">
//           <div className="flex items-center transition ease-in-out hover:scale-120">
//             <Image src={icon} width={208} height={48} alt={name} />
//           </div>
//           <h2 className="mt-30 w-full">{name}</h2>
//           <div className="flex justify-between">
//             <div>{price}</div>
//             <button className="bg-green-700 text-white font-bold p-4 rounded-tl-full">
//               {cart}
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   ))
// ) : (
//   <p className="text-white text-center">No items found for {active}</p>
// )}