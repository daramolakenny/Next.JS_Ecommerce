import { discountoffers } from '@/data'

interface DiscountOffer {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  discount: number;
}

const Discountmeal = ({ discountoffer }: { discountoffer: DiscountOffer[] }) => {
  return (
    <div className='w-full pt-4'>
        <div className='flex flex-wrap items-center justify-center gap-6 mb-4 border px-2'>
            {discountoffers.map((item) => (
            <div 
                key={item.id}  
                className='block  h-full rounded-2xl w-20 md:h-[20rem] relative bg-no-repeat md:w-[26.5rem]' 
                style={{
                backgroundImage: `url(${item.icon})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
                <div className='relative flex flex-col bg-transparent min-h-[16rem] rounded-lg shadow-lg overflow-hidden'>
                    <p className='text-white bg-[#03081F] w-16 ml-[21rem] rounded-b-2xl py-2 px-4 text-center font-bold -mt-0.8'>
                        ${item.discount}
                    </p>
                    <div className=' flex justify-between mt-[12rem] pl-2'>
                        <div className='bg-[#03081F] rounded-lg'>
                            <h3 className='text-xl text-[#FC8A06] text-center font-semibold'>{item.title}</h3>
                            <p className='text-white font-bold'>{item.subtitle}</p>
                        </div>
                        <div className='bg-[#028643] text-white font-bold p-2 rounded-tl-4xl'>
                            {item.Order}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Discountmeal