import { useState, useEffect } from "react";
import dataMap from "@/data";
import Link from "next/link";

// Define a type for the keys of dataMap
type DataMapKeys = keyof typeof dataMap;

const ItemCategory = () => {
  const [active, setActive] = useState<DataMapKeys>("Soup");

  useEffect(() => {
    console.log("dataMap:", dataMap);
    console.log("active category:", active);
    console.log("dataMap[active]:", dataMap[active]);
  }, [active]);

  return (
    <div className="h-full">
      <div className="flex flex-col sm:flex-row justify-center shadow-white tracking-wide py-4 sm:py-6 text-lg sm:text-2xl border-b-sky-100 gap-2 sm:gap-0">
      {/* <div className="flex md:flex-row sm:flex-col justify-center shadow-white tracking-wide py-10 text-2xl border-b-sky-100"> */}
        {Object.keys(dataMap).map((category) => (
          <button
            key={category}
            onClick={() => setActive(category as DataMapKeys)}
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

      <div className="w-full h-fit flex flex-row my-10 items-center justify-center">
        <div className="md:flex flex-wrap gap-10 mb-8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem ">
        {dataMap[active]?.length > 0 ? (
          dataMap[active].map(({ id, icon, name, price, cart, url}) => (
            <div key={id} className="block relative gap-4 md:max-w-[30rem] p-0.5">
              {/* Fix the href to match the dynamic route */}
              {/* <Link href={url}> */}
              <Link href={`/items/${id}`}>
                <div className="relative rounded-br-4xl bg-orange-100 text-green-900 shadow flex flex-col min-h-[16rem] p-[2.4rem] cursor-pointer">
                  <div className="flex items-center transition ease-in-out hover:scale-120">
                    <img src={icon} width={208} height={48} alt={name} />
                  </div>
                  <h2 className="mt-30 w-full">{name}</h2>
                  <div className="flex justify-between">
                    <div>{price}</div>
                    <button className="bg-green-700 text-white font-bold p-4 rounded-tl-full">
                      {cart}
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No items found for {active}</p>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default ItemCategory;