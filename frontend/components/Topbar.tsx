import React from 'react'

const Topbar = () => {
  return (
    <div className='w-full'>
        <div className='md:max-w-[1020px] flex mx-auto rounded-br-2xl'>
            <div className='flex py-2 text-white'>
                <h3>Get 5% off your first order,</h3>
                <span className='text-yellow-200'>Promo: ORDERS</span>
            </div>

            <div className='text-white flex justify-between'>
                <div className='py-2'>
                    Cambridge street, A1, A1201,Lagos
                    <span className='text-yellow-200'>Change Location</span>
                </div>
                <div className='ml-6'>
                    <span className='rounded-bl-2xl bg-[#028643] border-r-1 p-4.5'>ico</span>
                    <span className='bg-[#028643] border-r-1 p-4.5'>items</span>
                    <span className='bg-[#028643] border-r-1 p-4.5'>NG 90</span>
                    <span className='rounded-br-2xl bg-[#028643] p-4.5'>arrow icon</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar