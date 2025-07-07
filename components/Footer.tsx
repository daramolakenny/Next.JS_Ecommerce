import React from 'react';

export default function Footer() {
    const date = new Date().getFullYear();

    // const count = UseCounterStore((state) => state.count);
    // const increment = UseCounterStore((state) => state.increment);
    // const decrement = UseCounterStore((state) => state.decrement);

    return (
        // <div>
            <footer className="w-full items-center justify-center">
                {/* <div className="mt-30">{count}</div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button> */}
                <div className="w-full bg-yellow-200">
                    <div className='md:w-[1220px] flex flex-wrap m-auto gap-6'>
                        <div className='py-16 leading-8 px-6 md:w-[24rem]'>
                            <header className='font-bold text-2xl pb-4'>MOSNNY</header>
                            <p>Company #5084221, Register with House of companies.</p>
                        </div>

                            {/* <div className='md:w-[780px] gap-4 border border-white'></div>

                            <div className='md:w-[310px] gap-4 border border-white'></div> */}

                        <div className='py-16 leading-8 px-6 md:w-[24.5rem]'>
                            <header className='font-bold'>Get Exclusive Deals in your inbox</header>
                            {/* this place will be a imported form */}
                            <div className='flex pl-2 w-full bg-gray-300 shadow-2xl rounded-2xl'>
                                <input type="text" placeholder='youremail@gmail.com' className='pl-2 focus:outline-none text-black' />
                                <button className='bg-[#000319] text-white ml-[2.9rem] px-4 rounded-2xl '>Subscribe</button>
                            </div>
                            <p>we won't spam, read our <a href="#" className='border-b pb-0'>email policy</a></p>
                            <div className='flex'>
                                <span className='px-3'><a href="#">Icon</a></span>            
                                <span className='px-3'><a href="#">Icon</a></span>            
                                <span className='px-3'><a href="#">Icon</a></span>            
                                <span className='px-3'><a href="#">Icon</a></span>            
                            </div>
                        </div>

                        <div className='py-16 leading-8 px-6 gap-4 flex'>
                            <div>
                                <header className='font-bold'>Important Links</header>
                                <div className='flex flex-col'>
                                    <a href="#">Tearms and conditions</a>
                                    <a href="#">Privacy</a>
                                    <a href="#">Cookies</a>
                                    <a href="#">https://mosnny.ng/</a>
                                </div>
                            </div> 

                            <div>
                                <header className='font-bold'>Legal Pages</header>
                                <div className='flex flex-col'>
                                    <a href="#">Home</a>
                                    <a href="#">Restaurant</a>
                                    <a href="#">Order</a>
                                    <a href="#">Sign up to deliver</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex md:w-[1220px] m-auto justify-between text-sm text-gray-400 py-2'>
                    <div className="sm:px-4 text-sm pt-2">
                        <p>© {date} FOODIE MOSNNY. All Right Reserved.</p>
                    </div>

                    <div className="md:flex md:flex-row sm:flex sm:flex-col leading-8">
                        <p className="px-3"><a href="">Privacy Policy</a></p>
                        <p className="px-3"><a href="">Terms</a></p>
                        <p className="px-3"><a href="">Pricing</a></p>
                        <p className="px-3"><a href="">Follow Us</a></p>
                    </div>
                </div>
            </footer>
    )
}