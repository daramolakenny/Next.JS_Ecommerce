// 'use client'

// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import dataMap from '@/data'

// type ItemType = {
//   id: number
//   name: string
//   icon: string
//   price: string
//   Order: string
//   remove_order: string
//   cart: string
//   url: string
// }

// export default function ItemDetailPage({ params }: { params: { id: string } }) {
//   const router = useRouter();
//   const { id } = params;
//   const [item, setItem] = useState<ItemType | null>(null);

//   useEffect(() => {
//     if (!id || isNaN(Number(id))) {
//       router.push('/404'); // Redirect to custom 404 page
//       return;
//     }
//     const foundItem = Object.values(dataMap)
//       .flat()
//       .find((item) => item.id === Number(id));
//     setItem(foundItem || null);
//     console.log('Item found:', foundItem);
//     }, [id, router]);

//   if (!item) {
//     return (
//       <main className="min-h-screen bg-white px-4 py-20 flex items-center justify-center">
//         <div className="text-gray-500 text-xl">Loading...</div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-white px-4 py-20">
//       <div className="max-w-[1200px] mx-auto rounded-lg shadow p-8 flex flex-col md:flex-row gap-10 bg-white">
//         <img
//           src={item.icon}
//           alt={item.name}
//           className="w-full md:w-1/2 h-auto rounded-lg object-cover"
//           loading="lazy"
//         />
//         <section className="md:w-1/2 flex flex-col justify-center">
//           <h1 className="text-5xl font-extrabold mb-4 text-gray-900">{item.name}</h1>
//           <p className="text-gray-600 text-lg mb-6">{item.price}</p>

//           <div className="flex gap-4">
//             <button
//               className="px-6 py-3 bg-black text-white rounded-md font-semibold transition hover:bg-gray-800"
//               onClick={() => alert('Order added!')}
//               aria-label={`Add ${item.name} to order`}
//             >
//               Add to Order
//             </button>
//             <button
//               className="px-6 py-3 border border-gray-300 rounded-md font-semibold text-gray-700 transition hover:border-gray-400"
//               onClick={() => alert('Order removed!')}
//               aria-label={`Remove ${item.name} from order`}
//             >
//               Remove from Order
//             </button>
//           </div>
//         </section>
//       </div>
//     </main>
//   )
// }


// app/items/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import dataMap from '@/data';
import Image from 'next/image';
import { useCounterStore } from '@/stores/Cartcounter';

type ItemType = {
  id: number;
  name: string;
  src: string;
  icon: string;
  price: string;
  cart: string;
  Order: string;
  remove_order: string;
  url: string;
};

export default function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [item, setItem] = useState<ItemType | null>(null);

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    console.log("params id:", id); // Debug
    if (!id || isNaN(Number(id))) {
      setItem(null);
      return;
    }
    const foundItem = Object.values(dataMap)
      .flat()
      .find((item) => item.id === Number(id));
    console.log("foundItem:", foundItem); // Debug
    if (foundItem) {
      setItem({ ...foundItem, src: foundItem.icon });
    } else {
      setItem(null);
    }
  }, [id]);

  if (!item) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
        <h1 className="text-gray-500 text-lg font-medium">Item not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-[1200px] mx-auto rounded-lg shadow p-8 flex flex-col md:flex-row gap-10 bg-white">
        <Image
          src={item.icon}
          alt={item.name}
          width={500}
          height={500}
          className="w-full md:w-1/2 h-auto rounded-lg object-cover"
          loading="lazy"
        />
        <section className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">{item.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{item.price}</p>
          <div className='flex flex-col pb-4'>
            <label htmlFor="input quantity" className='mb-2'>Qty</label>
            <p className='border w-25 pl-2 rounded'>{count}</p>
            {/* < type="number" name='quantity' onChange={} value={count} className='w-20 pl-2 outline-2 rounded' /> */}
            <div className="flex gap-2 pt-2">
              <button
                className="px-4.5 border border-gray-300 rounded-md font-semibold transition hover:bg-gray-800"
                onClick={increment}
              >
                +
              </button>
              <button
                onClick={decrement}
                className="px-4.5 border border-gray-300 rounded-md font-semibold text-gray-700 transition hover:border-gray-400"
              >
                -
              </button>
            </div>
          </div>
          <div className="flex gap-4">
              <button
                className="p-2 bg-black text-white rounded-md font-semibold transition hover:bg-gray-800"
                onClick={() => alert('Order added!')}
                aria-label={`Add ${item.name} to order`}
              >
                {item.Order}
              </button>
            </div>
        </section>
      </div>
    </main>
  );
}