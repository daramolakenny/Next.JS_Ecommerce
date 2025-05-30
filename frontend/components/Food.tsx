import { useState } from "react";
import dataMap from "@/data";

// Define a type for the keys of dataMap
type DataMapKeys = keyof typeof dataMap;

const Food = () => {
  const [active, setActive] = useState<DataMapKeys>("Food");

  return (
    <div>
      <div className="flex justify-center bg-[#000319] shadow-white tracking-wide p-4 text-2xl border-b-sky-100">
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
        className="w-full h-screen flex flex-col items-center justify-center"
        style={{
          background: "url(/images/decorfruit1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="uppercase text-6xl text-white font-extrabold mb-4">
          {active}
        </div>

        <div className="flex rounded-full md:mx-4 bg-yellow-100 p-8 text-[1rem] font-medium">
          <h4 className="mr-6">{active} Items</h4>
          
          <ul className="md:flex px-4 sm:flex sm:flex-wrap ">
            {dataMap[active].map((item) => (
              <li key={item.id} className="mr-4">
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Food;