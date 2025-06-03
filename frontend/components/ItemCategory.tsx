import { useState } from "react";
import dataMap from "@/data";
import Link from "next/link";

// Define a type for the keys of dataMap
type DataMapKeys = keyof typeof dataMap;

const ItemCategory = () => {
  const [active, setActive] = useState<DataMapKeys>("Dishes");

  
  return (
    <div className="h-full">
      <div className="flex justify-center bg-[#000319] shadow-white tracking-wide py-10 text-2xl border-b-sky-100">
        {Object.keys(dataMap).map((category) => (
          <button
            key={category} 
            onClick={() => setActive(category as DataMapKeys)} // Assert the type here
            className={`px-4 ${
              active === category
                ? "border-b-4 border-white font-bold text-white"
                : "text-yellow-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="w-full h-fit flex flex-col my-10 items-center justify-center"
      >
        <div className="md:flex flex-wrap gap-10 mb- 8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem">
            {dataMap[active].map(({id, icon, name, price, cart, url}) => (
                <div 
                  key={id} 
                  className="block relative gap-4 md:max-w-[30rem] p-0.5"
                >
                  <div className="relative border border-yellow-100 shadow flex flex-col flex-wrap min-h-[22rem] p-[2.4rem] cursor-pointer"> 
                    <div className="flex items-center">
                      <img src={icon} width={48} height={48} alt={name} />
                    </div>
                    <h2 className="mt-30 w-full">{name}</h2>
                
                    <div className="flex justify-between">
                      <div>{price}</div>
                      <button>
                        <a href={`/itemsdetails/${id}`}>{cart}</a>
                      </button>
                    </div>
                  </div>
                </div>
            ))}
        </div>
      </div>
            
    </div>
  );
};

export default ItemCategory;