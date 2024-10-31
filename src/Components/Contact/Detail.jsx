import React from 'react'
import { AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai';


const Detail = () => {
  return (
    <div className='p-8 space-y-4'>
        <div className=' border-b-[0.5px] space-y-4 py-4'>
              <div className=' flex items-center text-3xl space-x-2'>
                <AiOutlinePhone className=' text-blue-600'/>
                <h3 className='text-2xl font-semibold max-md:text-lg max-md:font-medium'>Call To Us</h3>
            </div>  
            <p className=' max-md:text-sm'>We are available 24/7, 7 days a week.</p>
            <p className=' max-md:text-sm'>Phone: +8801611112222</p>
        </div>
        <div className=' space-y-4 py-4'>
              <div  className=' flex items-center text-3xl space-x-2'>
                <AiOutlineMessage className=' text-blue-600'/>
                <h3 className='text-2xl font-semibold max-md:text-lg max-md:font-medium'>Write To US</h3>
            </div>  
            <p className=' max-md:text-sm'>Fill out our form and we will contact you within 24 hours.</p>
            <p className=' max-md:text-sm'>Emails: customer@exclusive.com</p>
        </div>
    </div>
  )
}

export default Detail