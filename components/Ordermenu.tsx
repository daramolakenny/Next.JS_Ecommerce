import { useState, useEffect } from "react";
import dataMap from "@/data";
import Link from "next/link";
import Image from "next/image";

interface Item {
  id: number;
  name: string;
  icon: string;
  price: string;
  Order: string;
  url: string;
}

// Define the type for items in dataMap

// Define a type for the keys of dataMap
type DataMapKeys = keyof typeof dataMap;

interface ItemCategoryProps {
  searchQuery: string;
}

const Ordermenu = ({ searchQuery }: ItemCategoryProps) => {
    const [active, setActive] = useState<DataMapKeys>("Offers");

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
    <div className="h-full w-full bg-white">
        <div className="md:container mx-auto px-6 flex">
        {/* flex md:flex-col w-1/4 h-fit sm:flex-row tracking-wide py-4 sm:py-6 text-lg sm:text-2xl border-b-sky-100 sm:gap-0 */}
            <div className="w-1/4 bg-white h-[10mv] leading-8 ml-1 md:w-[24rem]">
                <div className=" w-full pl-0 leading-loose justify-start">
                    <h3 className="py-4 bg-white">Menu</h3>
                    {Object.keys(dataMap).map((category) => (
                    <button
                        key={category}
                        onClick={() => setActive(category as DataMapKeys)}
                        className={`px-4 w-full justify-start text-start ${
                        active === category
                            ? "bg-[#03081F] font-bold text-white"
                            : "font-bold text-white"
                        }`}
                    >
                        {category}
                    </button>
                    ))}
                </div>
            </div>

            {/* <div className="w-full bg-white h-fit flex flex-row items-center justify-center"> */}
            <div className="leading-8 ml-1 px-6 md:w-[44rem]">
                <div className="md:flex flex-wrap gap-10 mb-8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem">
                    {/* <input placeholder="sort by price" className="border rounded-4xl pl-2" /> */}
                {itemsToDisplay.length > 0 ? (
                    itemsToDisplay.slice(0, 3).map(({ id, icon, name, price, Order }) => (
                    <div key={id} className="block relative gap-4 md:max-w-[30rem] p-0.5">
                        {/* <Link href={`/items/${id}`}> */}
                        <div className="flex justify-between text-black pt-4 pb-2">
                        <h2>{name}</h2>
                        </div>

                        <div className="relative rounded-br-4xl bg-orange-100 text-green-900 shadow flex flex-col min-h-[10rem] p-[2.4rem] cursor-pointer">
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="mt w-full">{name}</h2>
                                    <span>icons</span>
                                    <p>The recipe is so yummy</p>
                                </div>
                                <Image src={icon} width={100} height={20} alt={name} className="" />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <div className="border flex p-2 gap-2">
                                    <h3>Small</h3>
                                    <button className="bg-[#028643] px-4">$10</button>
                                </div>

                                <div className="border flex p-2 gap-2">
                                    <h3>Medium</h3>
                                    <button className="bg-[#028643] px-4">$10</button>
                                </div>

                                <div className="border flex p-2 gap-2">
                                    <h3>Large</h3>
                                    <button className="bg-[#028643] px-4">$10</button>
                                </div>
                                <div className="border flex p-2 gap-2">
                                    <h3>XL large with sauce</h3>
                                    <button className="bg-[#028643] px-4">$10</button>
                                </div>
                            <div>{price}</div>
                            {/* <button className="bg-[#028643] text-white font-bold p-4 rounded-tl-4xl">
                                {Order}
                            </button> */}
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                    ))
                ) : (
                    <p className="text-black pt-6 text-center">No items found</p>
                )}
                </div>
            </div>

            {/* <div className="w-full bg-white h-fit flex flex-row items-center justify-center">
                <div className="md:flex flex-wrap gap-10 mb-8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem">
                {itemsToDisplay.length > 0 ? (
                    itemsToDisplay.slice(0, 3).map(({ id, icon, name, price, Order }) => (
                    <div key={id} className="block relative gap-4 md:max-w-[30rem] p-0.5">
                        <Link href={`/items/${id}`}>
                        <div className="relative rounded-br-4xl bg-orange-100 text-green-900 shadow flex flex-col min-h-[16rem] p-[2.4rem] cursor-pointer">
                            <div className="flex items-center transition ease-in-out hover:scale-120">
                            <Image src={icon} width={208} height={48} alt={name} className="" />
                            </div>
                            <h2 className="mt-10 w-full">{name}</h2>
                            <div className="flex justify-between">
                            <div>{price}</div>
                            <button className="bg-[#028643] text-white font-bold p-4 rounded-tl-4xl">
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
            </div> */}
        </div>

    </div>
  );
}

export default Ordermenu