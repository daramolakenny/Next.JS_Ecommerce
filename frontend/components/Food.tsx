import { useState } from "react";
import dataMap from "@/data";
import { title } from "process";
import { UseCounterStore } from "@/stores/Cartcounter";

// Define a type for the keys of dataMap
type DataMapKeys = keyof typeof dataMap;

const Food = ({src, href} : {
  src: string,
  href: string
}) => {
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
        // style={{
        //   background: "url(/images/decorfruit1.jpg)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* <div className="uppercase text-6xl text-white font-extrabold mb-4">
          {active}
        </div> */}

        <div className="md:flex flex-wrap gap-10 mb- 8 items-center justify-center text-white p-2 text-[1rem] font-medium md:max-w-[24rem">
          {/* <h4 className="mr-6">{active} Items</h4> */}
          
          {/* <div className="md:flex px-4 sm:flex sm:flex-wrap "> */}
            {dataMap[active].map(({id,icon, name, price, Order, remove_order, url}) => (
              <div 
                key={id} 
                className="block relative  gap-4 md:max-w-[30rem] p-0.5"
              >
                <div className="relative flex flex-col min-h-[22rem] p-[2.4rem] cursor-pointer"> 
                  <div className="flex items-center">
                    <img src={icon} width={48} height={48} alt={name} />
                  </div>
                  <h2 className="mt-30 w-full">{name}</h2>
                  <div 
                    className="flex justify-between absolute">
                      <div>{Order}</div>
                      <div>{remove_order}</div>
                    </div>
                </div>
              </div>
            ))}

          {/* </div> */}
        </div>
      </div>
            
    </div>
  );
};

export default Food;