import React from 'react'
import {Detail , InputSection} from "../Components/index"
const Contact = () => {
  return (
    <div className=' py-12 max-sm:py-8'>
    <h1 className='text-4xl text-blue-600 text-center font-bold max-md:text-lg text-wrap my-6'>Need Assistance? We’re Just <br /> a Message Away!</h1>
    <div className=' flex flex-wrap-reverse justify-center items-center'>

        <Detail/>
         <InputSection/>
    </div>
    </div>
  )
}

export default Contact