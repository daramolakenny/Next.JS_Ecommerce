import React from 'react'

const Carousel = () => {
    const date = new Date().getMonth().toString();

    return (
    <div className='flex w-full bg-gray-100 justify-center items-center'>
        <div className='w-[1220px] py-10'>
            <div className='flex justify-between'>
                <div className='p-2'>
                    <h1 className='text-2xl font-bold'>Customer Reviews</h1>
                </div>

                <div>
                    <button className='absolute right-4 md:right-20 rounded-full p-2 bg-[#FC8A06]' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                    <button className='absolute right-10 md:right-34 rounded-full p-2 bg-[#FC8A06]' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap md:max-w-[1220px] m-auto gap-5 rounded-2xl border border-slate-100'>
                <div className='py-6 bg-white leading-8 px-6 md:w-[24.5rem]'>
                    <div className='flex justify-between'>
                        <div className='flex h-12 w-full'>
                            <div className='w-10 h-10 mr-2 rounded-4xl bg-amber-950'></div>
                                <span className='bg-[#FC8A06] w-1 h-12 left-6'></span>

                            <div className='flex w-full py-0 justify-between'>
                                <div className='flex flex-col pl-2 leading-5'>
                                    <span className=''>St Rome</span>
                                    <span className='text-[#FC8A06]'>Festac Lagos</span>
                                </div>

                                <div className='flex flex-col pl-2 leading-5'>
                                    <h3 className=''>icon</h3>
                                    <p>{date}</p>
                                </div>
                                    </div>
                                </div>

                    </div>
                    <p>The positive aspect was undoubtedly the efficiency of the service. The queue move quickly, the staff was friendly, and the food was up to the Chicken Republic standard - hot and satisfying.
                    </p>
                </div>
                        
                <div className='py-6 bg-white leading-8 px-6 md:w-[24.5rem]'>
                    <div className='flex justify-between'>
                        <div className='flex h-12 w-full'>
                            <div className='w-10 h-10 mr-2 rounded-4xl bg-amber-950'></div>
                                <span className='bg-[#FC8A06] w-1 h-12 left-6'></span>

                            <div className='flex w-full py-0 justify-between'>
                                <div className='flex flex-col pl-2 leading-5'>
                                    <span className=''>St Rome</span>
                                    <span className='text-[#FC8A06]'>Festac Lagos</span>
                                </div>

                                <div className='flex flex-col pl-2 leading-5'>
                                    <h3 className=''>icon</h3>
                                    <p>{date}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p>The positive aspect was undoubtedly the efficiency of the service. The queue move quickly, the staff was friendly, and the food was up to the Chicken Republic standard - hot and satisfying.
                    </p>
                </div>
            
                <div className='py-6 bg-white leading-8 px-6 md:w-[24.6rem]'>
                    <div className='flex justify-between'>
                        <div className='flex h-12 w-full'>
                            <div className='w-10 h-10 mr-2 rounded-4xl bg-amber-950'></div>
                                <span className='bg-[#FC8A06] w-1 h-12 left-6'></span>

                            <div className='flex w-full py-0 justify-between'>
                                <div className='flex flex-col pl-2 leading-5'>
                                    <span className=''>St Rome</span>
                                    <span className='text-[#FC8A06]'>Festac Lagos</span>
                                </div>

                                <div className='flex flex-col pl-2 leading-5'>
                                    <h3 className=''>icon</h3>
                                    <p>{date}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p>The positive aspect was undoubtedly the efficiency of the service. The queue move quickly, the staff was friendly, and the food was up to the Chicken Republic standard - hot and satisfying.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel