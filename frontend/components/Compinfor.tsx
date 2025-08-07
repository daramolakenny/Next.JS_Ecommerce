import React from 'react';
import { infor } from '@/data';
// import {contact} from '@/data';

// interface Infor {
//     id: number,
//     text: string,
//     time: string
// }

const Compinfor = () => {
  return (
    <div className='w-full bg-white items-center justify-center py-10 text-black'>
        <div className='flex flex-wrap md:max-w-[1220px] m-auto gap-6 rounded-2xl border border-slate-100 shadow-2xl md:pl-0 pl-20'>
            <div className='py-16 leading-8 px-6 md:w-[24.3rem]'>
                <header className='font-bold text-2xl pb-4'>Delivery Information</header>
                {infor.map((items, id) => (
                    <ul key={id} className='flex'>
                        <li className='pr-2 font-bold'>{items.text}</li>
                        <li>{items.time}</li>
                    </ul>
                ))}
            </div>
            
            <div className='py-16 leading-8 px-6 md:w-[24.5rem]'>
                <header className='font-bold text-2xl pb-4'>Contact Information</header>
                <p>If you have allergies or other dietary restriction, please contact the restaurant. The restaurant will provide food specific-information upon request.
                </p>
                <div>
                    <h3 className='font-bold'>Phone Number</h3>
                    <p>+234 814 7655 242</p>
                </div>
                <div>
                    <h3 className='font-bold'>Website</h3>
                    <p>https://mosnny.ng/</p>
                </div>
            </div>

            <div className='md:bg-[#000319] text-black md:text-white py-16 leading-8 ml-1 px-6 md:w-[24rem] rounded-r-2xl'>
                <header className='font-bold text-2xl pb-4'>Operational Times</header>
                {infor.map((items, id) => (
                    <ul key={id} className='flex'>
                        <li className='pr-2'>{items.text}</li>
                        <li>{items.time}</li>
                    </ul>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Compinfor